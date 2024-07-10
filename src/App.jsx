import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ForwardMethods from "/src/forwardMethods/ForwardMethods";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import { useState } from "react";

const routes = Array(4).fill("item");
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <h1 className="block-centered">React Lab</h1>
          <div>
            <Outlet />
          </div>
        </>
      ),
      children: [
        {
          path: "forward-methods",
          element: <ForwardMethods />,
        },
      ],
    },
  ]);

  return (
    <main>
      <Navbar expand="false" sticky="top">
        <Nav className="flexbox-row border-black" style={{ width: "100%" }}>
          <Nav
            className="flexbox-row"
            style={{
              justifyContent: "flex-start",
              margin: 0,
            }}
          >
            <Navbar.Toggle />
            <Navbar.Collapse style={{ width: 0 }}>
              {routes.map((route) => (
                <Nav.Item key={route}>{route}</Nav.Item>
              ))}
            </Navbar.Collapse>
          </Nav>
          <Nav>
            <Button>
              <Nav.Item onClick={handleShow}>Offcanvas</Nav.Item>
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
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
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
