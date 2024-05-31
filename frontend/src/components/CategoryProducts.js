import React from "react";
import SingleProductCard from "./SingleProductCard";
import { Link } from "react-router-dom";

export default function CategoryProducts() {
  return (
    <section className="container mt-3">
      <h3 className="mb-4 text-info">
        <span className="text-danger">Python</span> Products
      </h3>
      <div className="row mb-4">
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <Link className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
