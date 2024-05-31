import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

export default function AddressList() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="col-12">
              <Link
                to="/customer/addaddress"
                className="text-text-decoration-none btn btn-outline-success mb-4 float-end"
              >
                <i className="fa-solid fa-address-card"></i>
                &nbsp;&nbsp;Add Address
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body text-muted shadow">
                  <span className="mb-1 btn badge bg-success">
                    <i className="fa-solid fa-circle-check fa-lg text-white"></i>{" "}
                    Default
                  </span>
                  <h6>123, codab, wcasdvesf ,svesfv,wrv sff ,svesfv,wrv sf</h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body text-muted shadow">
                  <button className="btn badge bg-primary mb-1">
                    Set Default
                  </button>
                  <h6>123, codab, wcasdvesf ,svesfv,wrv sff ,svesfv,wrv sf</h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body text-muted shadow">
                  <button className="btn badge bg-primary mb-1">
                    Set Default
                  </button>
                  <h6>123, codab, wcasdvesf ,svesfv,wrv sff ,svesfv,wrv sf</h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body text-muted shadow">
                  <button className="btn badge bg-primary mb-1">
                    Set Default
                  </button>
                  <h6>123, codab, wcasdvesf ,svesfv,wrv sff ,svesfv,wrv sf</h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body text-muted shadow">
                  <button className="btn badge bg-primary mb-1">
                    Set Default
                  </button>
                  <h6>123, codab, wcasdvesf ,svesfv,wrv sff ,svesfv,wrv sf</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
