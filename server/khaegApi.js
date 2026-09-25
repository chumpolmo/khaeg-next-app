import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './config/firebase.js';

// Login
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
const port = 8009;

// Enable CORS for all routes
app.use(cors()); 
app.use(bodyParser.json());

// Object array
const myShops = [
  {
    shopId: 1,
    shopName: "Adidas",
    shopType: "Fashion",
    shopLoc: { lat: 100, lon: 150 },
    shopStatus: true
  },
  {
    shopId: 2,
    shopName: "Bata",
    shopType: "Shoes",
    shopLoc: { lat: 180, lon: 190 },
    shopStatus: true
  },
  {
    shopId: 3,
    shopName: "Nike",
    shopType: "Clothes",
    shopLoc: { lat: 130, lon: 290 },
    shopStatus: true
  },
  {
    shopId: 4,
    shopName: "New Balance",
    shopType: "Shoes",
    shopLoc: { lat: 190, lon: 230 },
    shopStatus: true
  },
  {
    shopId: 5,
    shopName: "Puma",
    shopType: "Shoes",
    shopLoc: { lat: 100, lon: 200 },
    shopStatus: false
  }
];

// http://localhost:8009/
app.get('/', (req, res) => {
  res.send('<h1>Server:<br/>Web Programming in 2/2569.</h1>');
});

// Route สำหรับการ Read ข้อมูลจากฐานข้อมูลด้วย id
// GET : http://localhos:xxxx/api/shops/1
app.get('/api/shops/:id', async (req, res) => { 
    try {
      const doc = await db
          .collection("shops_it_01690")
          .doc(req.params.id)
          .get();

      res.json(
        {
          id: doc.id,
          ...doc.data()
        }
      );
    } catch (error) {
      res.status(500).json(
        {
          message: "FAILED: การอ่านข้อมูล shops ด้วยรหัสร้านค้า (shopId) มีปัญหา กรุณาตรวจสอบ",
          error: error.message
        }
      );
    }
});

// { shopId: 100 }
app.get('/shops{/:shopId}', (req, res) => {
  const { shopId } = req.params;

  res.set('Content-type', 'application/json');

  if(isNaN(shopId)){
    res.send(myShops);
  }else{
    const shopItem = myShops.filter(
      shop => { return shop.shopId === Number(shopId) }
    );
    res.send(shopItem[0]);
  }

//    let myText = '';
//    myText+= '<h1>Shop information:</h1><hr/>';
//    myText+= `<b>Shop ID:</b> ${myShops.shopId}<br/>`;
//    myText+= `<b>Shop Location (Lat, Lon):</b> ${myShops.shopLoc.lat}, ${myShops.shopLoc.lon}<br/>`;

//    res.set('Content-type', 'text/html');
//    res.send(myText);
});

// GET: http://localhost:xxxx/api/shops
app.get('/api/shops', async(req, res) => { 
    try {
      // คำสั่ง: สำหรับการอ่านหรือดึงข้อมูลจาก Documents ที่จัดเก็บภายใน Collection
      const snapshot = await db
        .collection("shops_it_01690")
        .orderBy("shopName", "desc")
        .get();

      const shops =  snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      res.json(shops);
    } catch (error) {
      res.status(500).json(
        {
          message: "FAILED: การอ่านข้อมูล shops มีปัญหากรุณาตรวจสอบ",
          error: error.message
        }
      );
    }
});

// GET: http://localhos:8009/api/shops
app.get('/api/shops_old', async(req, res) => {
  try {
    const snapshot = await db
      .collection("shops")
      .orderBy("shopName", "desc")
      .get();

    const shops = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(shops);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch shops",
      error: error.message,
    });
  }
});

// GET : http://localhos:8009/api/shops/:id
app.get('/api/shops/:id', async (req, res) => {
  try {
    const doc = await db
      .collection("shops")
      .doc(req.params.id)
      .get();

    if (!doc.exists) {
      return res.status(404).json({
        message: "Shop not found",
      });
    }

    res.json({
      id: doc.id,
      ...doc.data(),
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch shop",
      error: error.message,
    });
  }
});

async function addShop(res) {
  const newShopRef = db.collection('shops').doc();
  const docRef = db.collection('shops').doc(newShopRef.id);
  let newDoc = {
    shopName: 'DBI Shop',
    shopType: 'Art Toy',
    shopStatus: true
  };
  await docRef.set(newDoc);

  res.status(201).json({
    id: docRef.id,
    ...newDoc,
  });

  console.log('Shop added!');
}

// POST : http://localhos:8009/api/shops
const createShop = async (req, res) => {
  try {
    const {
      shopName,
      shopType,
      shopStatus,
      imageUrl,
    } = req.body;

    if (!shopName || !shopType || !shopStatus) {

      return res.status(400).json({
        message: "Name, type and status are required",
      });

    }

    const newShop = {
      shopName,
      shopType,
      shopStatus: Boolean(shopStatus) || true,
      imageUrl: imageUrl || ""
    };

    const docRef = await db
      .collection("shops")
      .add(newShop);

    res.status(201).json({
      id: docRef.id,
      ...newShop,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to create Shop",
    });
  }
}

app.post('/api/shops', (req, res) => {
  try {
    //addShop(res);
    createShop(req, res);
  } catch (error) {
    res.status(500).json({
      message: "Failed to adding shop.",
      error: error.message,
    });
  }
});

const deleteShop = async (req, res) => {
  try {

    const ShopRef = db
      .collection("shops")
      .doc(req.params.id);

    const doc = await ShopRef.get();

    if (!doc.exists) {

      return res.status(404).json({
        message: "Shop not found",
      });

    }

    await ShopRef.delete();

    res.status(200).json({
      message: "Shop deleted successfully",
      id: req.params.id,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to delete Shop",
    });

  }
}

app.delete('/api/shops/:id', (req, res) => {
  try {
    deleteShop(req, res);
  } catch (error) {
    res.status(500).json({
      message: "Failed to deleting shop.",
      error: error.message,
    });
  }
});

const updateShop = async (req, res) => {

  try {

    console.log(`Update shop id: ${req.params.id}`);
    const ShopRef = db
      .collection("shops")
      .doc(req.params.id);

    const doc = await ShopRef.get();

    if (!doc.exists) {

      return res.status(404).json({
        message: "Shop not found",
      });

    }

    const {
      shopName,
      shopType,
      shopStatus,
      imageUrl,
    } = req.body;

    const updateData = {
      shopName,
      shopType,
      shopStatus,
      imageUrl: imageUrl || "",
    };

    await ShopRef.update(updateData);

    res.status(200).json({
      id: req.params.id,
      ...updateData,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to update Shop",
    });

  }

};

// POST : http://localhos:8009/api/shops
app.put('/api/shops/:id', (req, res) => {
  try {
    updateShop(req, res);
  } catch (error) {
    res.status(500).json({
      message: "Failed to updating shop.",
      error: error.message,
    });
  }
});

// Login Route: http://localhost:8009/api/login
app.post('/api/login', async (req, res) => {
  const JWT_SECRET="REACT-NEXTJS-KHAEG"
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // Query users collection by email
    const snapshot = await db
      .collection("users")
      .where("email", "==", email.toLowerCase().trim())
      .limit(1)
      .get();

    if (snapshot.empty) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const userDoc = snapshot.docs[0];

    const user = {
      id: userDoc.id,
      ...userDoc.data(),
    };

    // Compare entered password with stored password hash
    const isPasswordValid = await bcrypt.compare(
      password,
      user.passwordHash
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Create JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    // Do not return passwordHash to frontend
    const safeUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };

    res.status(200).json({
      message: "Login successful",
      token,
      user: safeUser,
    });
  } catch (error) {
    console.error("Login error:", error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});