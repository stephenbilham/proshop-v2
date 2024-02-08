import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
	// this was from the datbase before we used Redux Toolkit keeping for reference
	///////////////////////////////////////////
	///
	// useEffect(() => {
	// 	const fetchProducts = async () => {
	// 		const { data } = await axios("/api/products");
	// 		setProducts(data);
	// 	};
	// 	fetchProducts();
	// }, []);

	const { data: products, isLoading, isError: error } = useGetProductsQuery();

	if (isLoading) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div>
				Error:
				<Message variant="danger">
					{error?.data?.error || " something went wrong!"}
				</Message>
			</div>
		);
	}

	return (
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
	);
};

export default HomeScreen;
