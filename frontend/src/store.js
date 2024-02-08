import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import cartSliceReducer from "./slices/cartSlice";

const store = configureStore({
	reducer: {
		// Add the generated reducer as a specific top-level slice
		[apiSlice.reducerPath]: apiSlice.reducer,
		cart: cartSliceReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: process.env.NODE_ENV !== "production" ? true : false,
});

export default store;
