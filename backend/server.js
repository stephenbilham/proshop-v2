import path from "path";
import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import connectDb from "./config/db.js";
import { notFound, errorHandler } from "./middleware/ErrorMiddleware.js";
import cookieParser from "cookie-parser";

// Load environment variables
dotenv.config();

const port = process.env.PORT || 5000;

// Connect to database
connectDb();

// Create an instance of express || const express = require("express"); same but using es modules
const app = express();

// Middleware to parse json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to parse cookies
app.use(cookieParser());

// Create a route for products
app.use("/api/products", productRoutes);

// Create a route for users
app.use("/api/users", userRoutes);

// Create a route for orders
app.use("/api/orders", orderRoutes);

// Create a route for image upload
app.use("/api/upload", uploadRoutes);

// Create a route for paypal client id
app.get("/api/config/paypal", (req, res) =>
	res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

const __dirname = path.resolve(); // set __dirname to current directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
	// set static folder
	app.use(express.static(path.join(__dirname, "/frontend/build")));
	// any route that is not the api route will be redirected to the index.html file
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
	});
} else {
	// Create a route for the root
	app.get("/", (req, res) => {
		res.send("Api is running...");
	});
}

// error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
