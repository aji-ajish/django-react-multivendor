import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top px-5">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            Python Marketplace
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2024 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex ">
          <li className="ms-3">
            <Link className="text-body-secondary" href="#">
              <i className="fa-brands fa-x-twitter fa-lg"></i>
            </Link>
          </li>
          <li className="ms-3">
            <Link className="text-body-secondary" href="#">
              <i className="fa-brands fa-square-instagram fa-lg"></i>
            </Link>
          </li>
          <li className="ms-3">
            <Link className="text-body-secondary" href="#">
              <i className="fa-brands fa-square-facebook fa-lg"></i>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
