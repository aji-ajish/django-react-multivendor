import React from "react";
import SellerSidebar from "./SellerSidebar";

export default function SellerChangePassword() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="card">
            <h4 className="card-header">Change Password</h4>
            <div className="card-body">
              <form autoComplete="off">
                <div className="mb-3">
                  <label htmlFor="newpassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newpassword"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="oldpassword" className="form-label">
                    Old Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="oldpassword"
                    autoComplete="off"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
