import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import Message from "../components/Message";
import Paginate from "../components/Paginate";

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

	const { pageNumber } = useParams();

	const {
		data,
		isLoading,
		isError: error,
	} = useGetProductsQuery({ pageNumber });

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
				{data.products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
				<Paginate pages={data.pages} page={data.page} />
			</Row>
		</div>
	);
};

export default HomeScreen;
