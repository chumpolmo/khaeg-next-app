import express from "express";

import {
  getShops,
  getShopById,
  createShop,
  updateShop,
  deleteShop,
} from "../controllers/ShopController.js";

const router = express.Router();

// GET all
router.get("/", getShops);

// GET by ID
router.get("/:id", getShopById);

// POST new
router.post("/", createShop);

// PUT update
router.put("/:id", updateShop);

// DELETE
router.delete("/:id", deleteShop);

export default router;