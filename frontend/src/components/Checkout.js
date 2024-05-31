import React from "react";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <div className="container mt-4">
      <h3 className="mb-4">All Items (3)</h3>
      <div className="row">
        <div className="col-md-8 col-12">
          <div className="table-responsive">
            <table className="table table-responsive table-bordered ">
              <thead className="text-center">
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td>
                   <Link className="text-decoration-none"> <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKKHOIfAxTI2hxAtSiBe2Qeh6M0c3GuIX0A&s"
                      className="img-thumbnail"
                      width={100}
                      alt="..."
                    />
                    <span className="m-4">Django</span></Link>
                  </td>
                  <td className="text-end"><small>Rs:</small> 999.0</td>
                </tr>
                <tr>
                <td className="text-center">2</td>

                  <td>
                  <Link className="text-decoration-none"> <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKKHOIfAxTI2hxAtSiBe2Qeh6M0c3GuIX0A&s"
                      className="img-thumbnail"
                      width={100}
                      alt="..."
                    />
                    <span className="m-4">React JS</span></Link>
                  </td>
                  <td className="text-end"><small>Rs:</small> 999.0</td>
                </tr>
                <tr>
                <td className="text-center">3</td>

                  <td>
                  <Link className="text-decoration-none"> <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKKHOIfAxTI2hxAtSiBe2Qeh6M0c3GuIX0A&s"
                      className="img-thumbnail"
                      width={100}
                      alt="..."
                    />
                    <span className="m-4">PHP</span></Link>
                  </td>
                  <td className="text-end"><small>Rs:</small> 799.0</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                    <th></th>
                    <th>Total</th>
                    <th className="text-end"><small>Rs:</small> {2800-3}.0</th>
                </tr>
                <tr>
                        <td colSpan={3} align="center">
                            <Link to="/categories" className="btn btn-secondary">Continue Shopping</Link>
                            <Link className="btn btn-success ms-1" to="/order/success">Proceed to Payment</Link>
                        </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
