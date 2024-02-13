import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			// token: null,
		});
	} else {
		res.status(401);
		throw new Error("Invalid email or password");
	}
});

// @desc    Register user
// @route   POST /api/users
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
	res.send("register user");
});

// @desc    Logout user & clear token
// @route   POST /api/users/logout
// @access  Private

const logoutUser = asyncHandler(async (req, res) => {
	res.send("logout user");
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Public

const getUserProfile = asyncHandler(async (req, res) => {
	res.send("get user profile");
});

// @desc    update user profile
// @route   PUT /api/users/profile
// @access  Private

const updateUserProfile = asyncHandler(async (req, res) => {
	res.send("update user profile");
});

// @desc    Get Users
// @route   Get /api/users
// @access  Private/Adim

const getUsers = asyncHandler(async (req, res) => {
	res.send("get users");
});

// @desc    Get User
// @route   Get /api/users/:id
// @access  Private/Adim

const getUserById = asyncHandler(async (req, res) => {
	res.send("get user by id");
});

// @desc    Delete Users
// @route   Delete /api/users/:id
// @access  Private/Adim

const deleteUser = asyncHandler(async (req, res) => {
	res.send("delete user");
});

// @desc    Update User
// @route   PUT /api/users/:id
// @access  Private/Adim

const updateUser = asyncHandler(async (req, res) => {
	res.send("update user");
});

export {
	authUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
	getUserById,
	deleteUser,
	updateUser,
};
