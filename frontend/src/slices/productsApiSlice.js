import { PRODUCTS_URL, UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: ({ pageNumber, keyword }) => ({
				url: PRODUCTS_URL,
				params: { pageNumber, keyword },
			}),
			keepUnusedDataFor: 5,
			providesTags: ["Products"],
		}),
		getProductById: builder.query({
			query: (id) => ({ url: `${PRODUCTS_URL}/${id}` }),
			keepUnusedDataFor: 5,
		}),
		createProduct: builder.mutation({
			query: () => ({
				url: PRODUCTS_URL,
				method: "POST",
			}),
			invalidatesTags: ["Product"], // if we dont have this we have to refetch the data/page
		}),
		updateProduct: builder.mutation({
			query: (data) => ({
				url: `${PRODUCTS_URL}/${data._id}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["Products"],
		}),
		deleteProduct: builder.mutation({
			query: (id) => ({
				url: `${PRODUCTS_URL}/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Product"],
		}),
		uploadProductImage: builder.mutation({
			query: (data) => ({
				url: UPLOAD_URL,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Product"],
		}),
		createReview: builder.mutation({
			mutation: (data) => ({
				url: `${PRODUCTS_URL}/${data.productId}/reviews`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Product"],
		}),
		getTopProducts: builder.query({
			query: () => `${PRODUCTS_URL}/top`,
			keepUnusedDataFor: 5,
		}),
	}),
});

export const {
	useGetProductsQuery,
	useGetProductByIdQuery,
	useCreateProductMutation,
	useUpdateProductMutation,
	useDeleteProductMutation,
	useUploadProductImageMutation,
	useCreateReviewMutation,
	useGetTopProductsQuery,
} = productsApi;
