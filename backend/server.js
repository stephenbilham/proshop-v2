import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
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

// Create a route
app.get("/", (req, res) => {
	res.send("Api is running...");
});

// Create a route for products
app.use("/api/products", productRoutes);

// Create a route for users
app.use("/api/users", userRoutes);

// error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
