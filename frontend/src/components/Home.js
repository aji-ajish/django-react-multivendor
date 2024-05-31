import React from "react";
import SingleProductCard from "./SingleProductCard";
import { Link } from "react-router-dom";
import SingleCategoryCard from "./SingleCategoryCard";
import SingleSellerCard from "./SingleSellerCard";

export default function Home() {
  return (
    <main className="mt-4">
      <div className="container">
        {/* Latest Products */}
        <h3 className="mb-4 text-info">
          Latest Products
          <Link to="/products" className="float-end btn btn-sm btn-warning ">
            View All Products <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <div className="row mb-4">
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
        </div>
        {/* Latest Products End */}
        {/* Popular Categories */}
        <h3 className="mb-4 text-danger">
          Popular Categories
          <Link to="/categories" className="float-end btn btn-sm btn-danger ">
            View All Categories
            <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <div className="row mb-4">
          <SingleCategoryCard />
          <SingleCategoryCard />
          <SingleCategoryCard />
          <SingleCategoryCard />
        </div>
        {/* Popular Categories End */}
        {/* Popular Products */}
        <h3 className="mb-4 text-success">
          Popular Products
          <Link href="#" className="float-end btn btn-sm btn-success ">
            View All Products <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <div className="row mb-4">
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
        </div>
        {/* Popular Products End */}
        {/* Popular Seller */}
        <h3 className="mb-4">
          Popular Sellers
          <Link href="#" className="float-end btn btn-sm btn-dark">
            View All Categories
            <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <div className="row mb-4">
          <SingleSellerCard />
          <SingleSellerCard />
          <SingleSellerCard />
          <SingleSellerCard />
        </div>
        {/* Popular Sellers End */}
        {/* Rating and Reviews */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide my-4 border bg-dark text-white p-5 "
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
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
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Rating and Reviews End */}
      </div>
    </main>
  );
}
