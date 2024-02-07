export const BASE_URL =
	process.env.NODE_ENV === "production" ? "http://localhost:5000" : "";
export const PRODUCTS_URL = "/api/users";
export const USERS_URL = "/api/orders";
export const PAYPAL_URL = "/api/config/paypal";
