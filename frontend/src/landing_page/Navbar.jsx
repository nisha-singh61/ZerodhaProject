import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <NavLink className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "23%" }}
            alt="Logo"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link">
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/product" className="nav-link">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pricing" className="nav-link">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/support" className="nav-link">
                Support
              </NavLink>
            </li>
          </ul>
          <div className="text-2xl mt-2 mx-4">
            <i className="fa-solid fa-bars" style={{ fontSize: "22px" }}></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
