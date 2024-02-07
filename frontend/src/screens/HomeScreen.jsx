import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";

const HomeScreen = () => {
	// useEffect(() => {
	// 	const fetchProducts = async () => {
	// 		const { data } = await axios("/api/products");
	// 		setProducts(data);
	// 	};
	// 	fetchProducts();
	// }, []);
	const { data: products, isLoading, isError: error } = useGetProductsQuery();

	const errorMessage =
		error?.data?.error || "Something went wrong. Please try again later.";

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div>
			{isLoading ? (
				<h2>Loading...</h2>
			) : error ? (
				<h2>{errorMessage}</h2>
			) : (
				<div>
					<h1>Latest Products</h1>
					<Row>
						{products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
				</div>
			)}
		</div>
	);
};

export default HomeScreen;
