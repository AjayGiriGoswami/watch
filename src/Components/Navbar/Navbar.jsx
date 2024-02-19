import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbars({ size, setshow, filteritem }) {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to ="/" onClick={() => setshow(false)}>
          Goswami{" "}
          <i class="fa-solid fa-shop" onClick={() => setshow(false)}></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />

        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <Nav.Link as={Link} to="/Home" onClick={() => setshow(false)}>
              Home{" "}
              <i class="fa-solid fa-house" onClick={() => setshow(false)}></i>
            </Nav.Link>
            <Nav.Link as={Link} to="/Login">
              User <i class="fa-solid fa-user"></i>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Cart"
              className="cart"
              onClick={() => setshow(true)}
            >
              Cart{" "}
              <i
                class="fa-solid fa-cart-shopping"
                onClick={() => setshow(false)}
              ></i>
              <span>{size}</span>
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Men"
              menuVariant="dark"
            >
              <NavDropdown.Item>
                <Nav.Link
                  as={Link}
                  to="/Watch"
                  onClick={() => filteritem("Watch")}
                >
                  Watch
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link
                  as={Link}
                  to="/Belt"
                  onClick={() => filteritem("Belt")}
                >
                  Belt
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
