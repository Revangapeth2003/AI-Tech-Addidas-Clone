import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import adidasLogo from "../images/addidas_logo-removebg-preview.png";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark text-light navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src={adidasLogo}
            alt="Adidas official logo"
            width="75"
            height="45"
          />
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <form class="d-flex justify-content-end ms-lg-5 ms-lg-4 ms-lg-5">
          <input
            class="form-control ms-5"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ms-3">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/men" className="nav-link">
                Men
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/women" className="nav-link">
                Women
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/kids" className="nav-link">
                Kids
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/upload" className="nav-link">
                Upload
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/form" className="nav-link">
                Form
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
