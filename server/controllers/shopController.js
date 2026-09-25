import db from "../config/firebase.js";

// =====================================
// GET ALL ShopS
// =====================================
export const getShops = async (req, res) => {

  try {

    const snapshot = await db
      .collection("shops")
      .orderBy("rating", "desc")
      .get();

    const Shops = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(Shops);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to fetch Shops",
    });

  }

};


// =====================================
// GET Shop BY ID
// =====================================
export const getShopById = async (req, res) => {

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

    res.status(200).json({
      id: doc.id,
      ...doc.data(),
    });

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch Shop",
    });

  }

};


// =====================================
// ADD NEW Shop
// =====================================
export const createShop = async (req, res) => {

  try {

    const {
      name,
      cuisine,
      city,
      rating,
      reviewCount,
      priceLevel,
      imageUrl,
    } = req.body;

    if (!name || !cuisine || !city) {

      return res.status(400).json({
        message: "Name, cuisine and city are required",
      });

    }

    const newShop = {
      name,
      cuisine,
      city,
      rating: Number(rating) || 0,
      reviewCount: Number(reviewCount) || 0,
      priceLevel: Number(priceLevel) || 1,
      imageUrl: imageUrl || "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
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

};


// =====================================
// UPDATE Shop
// =====================================
export const updateShop = async (req, res) => {

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

    const {
      name,
      cuisine,
      city,
      rating,
      reviewCount,
      priceLevel,
      imageUrl,
    } = req.body;

    const updateData = {
      name,
      cuisine,
      city,
      rating: Number(rating),
      reviewCount: Number(reviewCount),
      priceLevel: Number(priceLevel),
      imageUrl: imageUrl || "",
      updatedAt: new Date().toISOString(),
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


// =====================================
// DELETE Shop
// =====================================
export const deleteShop = async (req, res) => {

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

};