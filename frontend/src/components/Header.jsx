import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";

const Header = () => {
	const { cartItems } = useSelector((state) => state.cart);

	// Calculate total items in the cart (shouldnt be coming in as a string but it is so we convert it to a number)

	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>
							<img src={logo} alt="ProShop" />
							ProShop
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<LinkContainer to="/cart">
								<Nav.Link>
									<FaShoppingCart /> Cart
									{cartItems.length > 0 && (
										<Badge pill bg="success" style={{ marginLeft: "5px" }}>
											{cartItems.reduce((acc, curr) => {
												return acc + Number(curr.qty);
											}, 0)}
										</Badge>
									)}
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/login">
								<Nav.Link href="/login">
									<FaUser /> Sign In
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
