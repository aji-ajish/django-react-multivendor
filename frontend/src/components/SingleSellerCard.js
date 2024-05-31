import React from "react";
import { Link } from "react-router-dom";

export default function SingleSellerCard() {
  return (
    <>
      {/* Seller Box */}
      <div className="col-12 col-md-3 mb-4">
        <div className="card shadow">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKKHOIfAxTI2hxAtSiBe2Qeh6M0c3GuIX0A&s"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">Seller Name</h4>
          </div>
          <div className="card-footer">
            Categories: <Link href="#">Wordpress</Link>,{" "}
            <Link href="#">Drupal</Link>
          </div>
        </div>
      </div>
      {/* Seller Box End */}
    </>
  );
}
