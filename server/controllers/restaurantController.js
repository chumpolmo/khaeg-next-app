import db from "../config/firebase.js";

// =====================================
// GET ALL RESTAURANTS
// =====================================
export const getRestaurants = async (req, res) => {

  try {

    const snapshot = await db
      .collection("restaurants")
      .orderBy("rating", "desc")
      .get();

    const restaurants = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(restaurants);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to fetch restaurants",
    });

  }

};


// =====================================
// GET RESTAURANT BY ID
// =====================================
export const getRestaurantById = async (req, res) => {

  try {

    const doc = await db
      .collection("restaurants")
      .doc(req.params.id)
      .get();

    if (!doc.exists) {

      return res.status(404).json({
        message: "Restaurant not found",
      });

    }

    res.status(200).json({
      id: doc.id,
      ...doc.data(),
    });

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch restaurant",
    });

  }

};


// =====================================
// ADD NEW RESTAURANT
// =====================================
export const createRestaurant = async (req, res) => {

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

    const newRestaurant = {
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
      .collection("restaurants")
      .add(newRestaurant);

    res.status(201).json({
      id: docRef.id,
      ...newRestaurant,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to create restaurant",
    });

  }

};


// =====================================
// UPDATE RESTAURANT
// =====================================
export const updateRestaurant = async (req, res) => {

  try {

    const restaurantRef = db
      .collection("restaurants")
      .doc(req.params.id);

    const doc = await restaurantRef.get();

    if (!doc.exists) {

      return res.status(404).json({
        message: "Restaurant not found",
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

    await restaurantRef.update(updateData);

    res.status(200).json({
      id: req.params.id,
      ...updateData,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to update restaurant",
    });

  }

};


// =====================================
// DELETE RESTAURANT
// =====================================
export const deleteRestaurant = async (req, res) => {

  try {

    const restaurantRef = db
      .collection("restaurants")
      .doc(req.params.id);

    const doc = await restaurantRef.get();

    if (!doc.exists) {

      return res.status(404).json({
        message: "Restaurant not found",
      });

    }

    await restaurantRef.delete();

    res.status(200).json({
      message: "Restaurant deleted successfully",
      id: req.params.id,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to delete restaurant",
    });

  }

};