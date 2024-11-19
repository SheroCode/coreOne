import search from "../assets/search.png";
import cart from "../assets/cart.png";
import login from "../assets/login.png";
import apple from "../assets/apple-logo.png";
import profile from "../assets/profile.png";
import favs from "../assets/star.png";
import orders from "../assets/package.png";
import exit from "../assets/logout.png";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../utilities";
import Search from "./Search";
import { useCart } from "../context/CartContext";
import Badge from "react-bootstrap/Badge";

function CustomNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const { isLoggedIn, logout } = useContext(AuthContext);
  const location = useLocation();
  const { cartItems } = useCart();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleSearchClick() {
    setShowSearch(true);
    document.body.style.overflow = "hidden";
  }

  function handleCloseSearch() {
    setShowSearch(false);
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
        className={`py-2 ${isScrolled ? "navbar-blur" : ""}`}
        style={{ margin: "0" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo">
            CoreOne
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center flex-grow-1 ">
              <Nav.Link as={Link} to="/" className="mx-3 custom-style">
                Latest
              </Nav.Link>

              {location.pathname === "/" ? (
                <Nav.Link href="#categories" className="mx-3">
                  Categories
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/#categories" className="mx-3">
                  Categories
                </Nav.Link>
              )}

              <Nav.Link as={Link} to="/about" className="mx-3">
                About
              </Nav.Link>

              <Nav.Link as={Link} to="/support" className="mx-3">
                Support
              </Nav.Link>
            </Nav>

            <Nav className="nav-icons">
              <Nav.Link className="mx-3" onClick={handleSearchClick}>
                <img className="search" src={search} alt="Search" />
              </Nav.Link>

              <Nav.Link as={Link} to="/cart" className="mx-3">
                <img src={cart} alt="Cart" />
                {cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cartItems.length}
                  </Badge>
                )}
              </Nav.Link>

              {!isLoggedIn ? (
                <NavDropdown
                  title={<img src={login} alt="Login" />}
                  id="collapsible-nav-dropdown"
                  className="custom-dropdown mx-3"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/login"
                    className="btn primary"
                  >
                    Login
                  </NavDropdown.Item>
                  <p>Don't have an account?</p>
                  <NavDropdown.Item
                    as={Link}
                    to="/signup"
                    className="btn outline"
                  >
                    Sign Up
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown
                  title={<img src={login} alt="Account" />}
                  id="collapsible-nav-dropdown"
                  className="custom-dropdown loggedIn mx-3"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/profile"
                    className="loggedIn-links"
                  >
                    <img src={profile} alt="Profile" />
                    My Account
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/favs"
                    className="loggedIn-links"
                  >
                    <img src={favs} alt="Favourites" />
                    Favourites
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/orders"
                    className="loggedIn-links"
                  >
                    <img src={orders} alt="Orders" />
                    Orders
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/"
                    className="loggedIn-links border-none"
                    onClick={logout}
                  >
                    <img src={exit} alt="Logout" />
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
          <Nav.Link
            eventKey={2}
            className="mx-3 premium d-none d-lg-flex"
            style={{ cursor: "default" }}
          >
            <img className="apple" src={apple} alt="Apple Logo" />
            <p className="custom-font">Premium Reseller</p>
          </Nav.Link>
        </Container>
      </Navbar>
      <Search show={showSearch} close={handleCloseSearch} />
    </>
  );
}

export default CustomNavbar;
