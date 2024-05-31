import React from "react";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="card">
            <div className="card-body text-center mt-5 mb-5">
              <div>
                <i className="fa-solid fa-circle-check text-success fa-5x"></i>
                <h3 className="text-primary mt-3 text-success">
                  Thanks for the Order
                </h3>
                <p>
                  <Link to="/" className="btn btn-primary m-2">
                    Home
                  </Link>
                  <Link to="/customer/dashboard" className="btn btn-secondary m-2">
                    Dashboard
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
