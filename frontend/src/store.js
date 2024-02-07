import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
	reducer: {
		// Add the generated reducer as a specific top-level slice
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: process.env.NODE_ENV !== "production" ? true : false,
});

export default store;
