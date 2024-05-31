import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

export default function Orders() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="table-responsive">
              <table className="table table-responsive table-bordered ">
                <thead className="text-center">
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td>
                      <Link className="text-decoration-none">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKKHOIfAxTI2hxAtSiBe2Qeh6M0c3GuIX0A&s"
                          className="img-thumbnail"
                          width={100}
                          alt="..."
                        />
                        <span className="m-4">Django</span>
                      </Link>
                    </td>
                    <td className="text-end">
                      <small>Rs:</small> 999.0
                    </td>
                    <td className="text-success text-center"><i className="fa-solid fa-circle-check"></i> Completed</td>
                    <td>
                      <button className="btn btn-primary">
                        <i className="fa-solid fa-cloud-arrow-down"></i> Download
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">2</td>
                    <td>
                      <Link className="text-decoration-none">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKKHOIfAxTI2hxAtSiBe2Qeh6M0c3GuIX0A&s"
                          className="img-thumbnail"
                          width={100}
                          alt="..."
                        />
                        <span className="m-4">React JS</span>
                      </Link>
                    </td>
                    <td className="text-end">
                      <small>Rs:</small> 999.0
                    </td>
                    <td className="text-success text-center"><i className="fa-solid fa-circle-check"></i> Completed</td>
                    <td>
                      <button className="btn btn-primary">
                        <i className="fa-solid fa-cloud-arrow-down"></i> Download
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">3</td>
                    <td>
                      <Link className="text-decoration-none">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKKHOIfAxTI2hxAtSiBe2Qeh6M0c3GuIX0A&s"
                          className="img-thumbnail"
                          width={100}
                          alt="..."
                        />
                        <span className="m-4">PHP</span>
                      </Link>
                    </td>
                    <td className="text-end">
                      <small>Rs:</small> 799.0
                    </td>
                    <td className="text-warning text-center"><i className="fas fa-spinner fa-spin"></i> Processing</td>
                    <td>
                      <button className="btn btn-warning disabled">
                        <i className="fas fa-spinner fa-spin "></i> Processing
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">4</td>
                    <td>
                      <Link className="text-decoration-none">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKKHOIfAxTI2hxAtSiBe2Qeh6M0c3GuIX0A&s"
                          className="img-thumbnail"
                          width={100}
                          alt="..."
                        />
                        <span className="m-4">Angular</span>
                      </Link>
                    </td>
                    <td className="text-end">
                      <small>Rs:</small> 899.0
                    </td>
                    <td className="text-danger text-center"><i className="fa-solid fa-circle-xmark"></i> Canceled</td>
                    <td>
                      <button className="btn btn-danger disabled">
                        <i className="fa-solid fa-circle-xmark "></i> Canceled
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
