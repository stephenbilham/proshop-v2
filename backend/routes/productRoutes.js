import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// Create a route for products
router.get(
	"/",
	asyncHandler(async (req, res) => {
		const products = await Product.find({}); // empty object to get all products
		res.json(products);
	})
);

// Create a route for a single product
router.get(
	"/:id",
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);

		if (product) {
			return res.json(product);
		}

		res.status(404).json({ message: "Product not found" });
	})
);

export default router;
