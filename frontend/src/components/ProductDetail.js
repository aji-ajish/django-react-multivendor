import React from "react";
import { Link } from "react-router-dom";
import SingleProductCard from "./SingleProductCard";

export default function ProductDetail() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-4">
          <div
            id="productThumbnailSlider"
            className="carousel slide my-4  p-5 carousel-dark"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#productThumbnailSlider"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#productThumbnailSlider"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#productThumbnailSlider"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKKHOIfAxTI2hxAtSiBe2Qeh6M0c3GuIX0A&s"
                  className="img-thumbnail"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKKHOIfAxTI2hxAtSiBe2Qeh6M0c3GuIX0A&s"
                  className="img-thumbnail"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKKHOIfAxTI2hxAtSiBe2Qeh6M0c3GuIX0A&s"
                  className="img-thumbnail"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productThumbnailSlider"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productThumbnailSlider"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-8">
          <h3>Product Title</h3>
          <p>
            Eu sint dolore do occaecat esse tempor ullamco occaecat. Ipsum
            consectetur elit enim reprehenderit magna sit tempor reprehenderit
            irure enim exercitation ullamco. Sit qui ex enim incididunt aliqua
            commodo pariatur non est ullamco cillum nisi quis Lorem. Quis do
            deserunt nostrud dolor labore ex. Minim eu dolore ea ea nostrud
            Lorem pariatur. Dolor nisi ea irure deserunt sint aliquip eiusmod.
          </p>
          <h5 className="card-title">
            Price: <span className="text-muted">Rs.500</span>
          </h5>
          <p className="mt-3">
            <Link
              className="btn btn-dark btn-sm rounded-2"
              target="_blank"
              title="Demo"
            >
              <i className="fa-solid fa-chalkboard-user fa-lg"></i> Demo
            </Link>
            <button
              className="btn btn-success btn-sm rounded-2 ms-1"
              title="Add to Cart"
            >
              <i className="fa-solid fa-cart-plus fa-lg"></i> Add to Cart
            </button>
            <button
              className="btn btn-primary btn-sm rounded-2 ms-1"
              title="Buy Now"
            >
              <i className="fa-solid fa-bag-shopping"></i> Buy Now
            </button>
            <button
              className="btn btn-danger btn-sm rounded-2 ms-1"
              title="Add to Wishlist"
            >
              <i className="fa-solid fa-heart fa-lg"></i> Add to Wishlist
            </button>
          </p>
          <hr />
          <div className="producttags mt-4">
            <h6>Tags</h6>
            <p>
              <Link
                to="#"
                className="badge bg-secondary text-white text-decoration-none me-1"
              >
                Python
              </Link>
              <Link
                to="#"
                className="badge bg-secondary text-white text-decoration-none me-1"
              >
                React Js
              </Link>
              <Link
                to="#"
                className="badge bg-secondary text-white text-decoration-none me-1"
              >
                Django
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <h3 className="mt-5 mb-3">Related Products</h3>
      <div
        id="relatedProductSlider"
        className="carousel carousel-dark slide bg-light "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#relatedProductSlider"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#relatedProductSlider"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#relatedProductSlider"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row mb-5">
              <SingleProductCard />
              <SingleProductCard />
              <SingleProductCard />
              <SingleProductCard />
            </div>
          </div>
          <div className="carousel-item">
            <div className="row mb-5">
              <SingleProductCard />
              <SingleProductCard />
              <SingleProductCard />
              <SingleProductCard />
            </div>
          </div>
          <div className="carousel-item">
            <div className="row mb-5">
              <SingleProductCard />
              <SingleProductCard />
              <SingleProductCard />
              <SingleProductCard />
            </div>
          </div>
        </div>
      </div>
      {/* Related Products End */}
    </section>
  );
}
