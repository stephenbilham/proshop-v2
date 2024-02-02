import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import connectDb from "./config/db.js";

// Load environment variables
dotenv.config();

const port = process.env.PORT || 5000;

// Connect to database
connectDb();

// Create an instance of express || const express = require("express"); same but using es modules
const app = express();

// Create a route
app.get("/", (req, res) => {
	res.send("Api is running...");
});

// Create a route for products
app.get("/api/products", (req, res) => {
	res.json(products);
});

// Create a route for a single product
app.get("/api/products/:id", (req, res) => {
	const product = products.find((product) => product._id === req.params.id);
	res.json(product);
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
