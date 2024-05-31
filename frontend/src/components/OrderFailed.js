import React from "react";
import { Link } from "react-router-dom";

export default function OrderFailed() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="card">
            <div className="card-body text-center mt-5 mb-5">
              <div>
                <i class="fa-solid fa-circle-xmark text-danger fa-5x"></i>
                <h3 className="mt-3 text-danger">
                  Oops... Something Wrong Happened
                </h3>
                <p>
                  <Link to="/" className="btn btn-primary m-2">
                    Home
                  </Link>
                  <Link
                    to="/customer/dashboard"
                    className="btn btn-secondary m-2"
                  >
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
