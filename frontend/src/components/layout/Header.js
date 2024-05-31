import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-primary navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Python Market Place
        </Link>
        <button
          className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="categories">
                Categories
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                href="#" role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                My Account
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/customer/register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/customer/login">
                    Login
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/customer/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/customer/login">
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light position-relative"
                to="/checkout">
                <i className="fa-solid fa-cart-shopping fa-lg"></i>
                <span className="position-absolute top-2 start-100 translate-middle badge rounded-pill bg-danger">
                  9<span className="visually-hidden">unread messages</span>
                </span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Vendor Panel
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/seller/register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/seller/login">
                    Login
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/seller/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/seller/login">
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light position-relative"
                to="/checkout">
                <i className="fa-solid fa-bell fa-lg"></i>
                <span className="position-absolute top-2 start-100 translate-middle badge rounded-pill bg-danger">
                  9<span className="visually-hidden">unread messages</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
