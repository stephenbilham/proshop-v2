import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDb from "./config/db.js";

// Load environment variables
dotenv.config();

// Connect to database
connectDb();

const importData = async () => {
	try {
		// delete all data
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		// insert data
		const createUsers = await User.insertMany(users);

		//  get the admin user
		const adminUser = createUsers[0]._id;

		// add the admin user to each product
		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser };
		});

		await Product.insertMany(sampleProducts);
		console.log("Data Imported!".green.inverse);
		process.exit();
	} catch (error) {
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		// delete all data
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();
		console.log("Data Destroyed!".red.inverse);
		process.exit();
	} catch (error) {
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === "-d") {
	destroyData();
} else {
	importData();
}
