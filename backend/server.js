import express from "express"; // const express = require("express"); same but using es modules
import products from "./data/products.js";
const port = 5000;

const app = express();

app.get("/", (req, res) => {
	res.send("Api is running...");
});

app.get("/api/products", (req, res) => {
	res.json(products);
});

app.get("/api/products/:id", (req, res) => {
	const product = products.find((product) => product._id === req.params.id);
	res.json(product);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
