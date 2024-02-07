import express from "express";
const router = express.Router();
import {
	getProducts,
	getProductById,
} from "../controllers/productController.js";

// Create a route for products
router.route("/").get(getProducts);

// Create a route for products by id
router.route("/:id").get(getProductById);

export default router;
