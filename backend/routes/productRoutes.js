import express from "express";
const router = express.Router();
import {
	getProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// Create a route for products
router.route("/").get(getProducts).post(protect, admin, createProduct);

// Create a route for products by id
router
	.route("/:id")
	.get(getProductById)
	.put(protect, admin, updateProduct)
	.delete(protect, admin, deleteProduct);

export default router;
