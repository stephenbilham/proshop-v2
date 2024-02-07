import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => ({ url: PRODUCTS_URL }),
			keepUnusedDataFor: 5,
		}),
		getProductById: builder.query({
			query: (id) => ({ url: `${PRODUCTS_URL}/${id}` }),
			keepUnusedDataFor: 5,
		}),
	}),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
