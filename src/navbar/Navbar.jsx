import { useState } from "react";
import { Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
const routes = Array(4).fill("item");
export default function main() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<main>
			<Navbar expand={false} sticky="top">
				<Nav
					className="flexbox-row border-black"
					style={{ width: "100%" }}
				>
					<Nav
						className="flexbox-row"
						style={{
							justifyContent: "flex-start",
							margin: 0,
						}}
					>
						<Navbar.Toggle />
						<Navbar.Offcanvas placement="start">
							<Offcanvas.Header closeButton>
								<Offcanvas.Title>Tile</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								{routes.map((route) => (
									<Nav.Item key={route}>{route}</Nav.Item>
								))}
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Nav>
					<Nav>
						<Button>
							<Nav.Item onClick={handleShow}>Offcanvas</Nav.Item>
						</Button>
						<Offcanvas
							show={show}
							onHide={handleClose}
							placement="end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title>Tile</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								{routes.map((route) => (
									<Nav.Item key={route}>{route}</Nav.Item>
								))}
							</Offcanvas.Body>
						</Offcanvas>
					</Nav>
				</Nav>
			</Navbar>
		</main>
	);
}
