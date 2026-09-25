import express from "express";

import {
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../controllers/restaurantController.js";

const router = express.Router();

// GET all
router.get("/", getRestaurants);

// GET by ID
router.get("/:id", getRestaurantById);

// POST new
router.post("/", createRestaurant);

// PUT update
router.put("/:id", updateRestaurant);

// DELETE
router.delete("/:id", deleteRestaurant);

export default router;