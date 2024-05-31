import React from "react";
import { Link } from "react-router-dom";

export default function SingleProductCard(product) {

  const{title,price}=product.product
  return (
    <>
      {/* Product Box */}
      <div className="col-12 col-md-3 mb-4">
        <div className="card shadow">
          <Link to="/product/python-timer/1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKKHOIfAxTI2hxAtSiBe2Qeh6M0c3GuIX0A&s"
              className="card-img-top"
              alt="..."
            />
          </Link>
          <div className="card-body">
            <Link to="/product/python-timer/1" className="text-decoration-none">
              <h4 className="card-title">{title}</h4>
            </Link>
            <h6 className="card-title">
              Price: <span className="text-muted">Rs.{price}</span>
            </h6>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-success btn-sm rounded-5"
              title="Add to Cart"
            >
              <i className="fa-solid fa-cart-plus "></i>
            </button>
            <button
              className="btn btn-danger btn-sm rounded-5 ms-1"
              title="Add to Wishlist"
            >
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Product Box End */}
    </>
  );
}
