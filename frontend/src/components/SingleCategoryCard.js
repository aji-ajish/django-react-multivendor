import React from "react";

export default function SingleCategoryCard() {
  return (
    <>
      {/* Categories Box */}
      <div className="col-12 col-md-3 mb-4">
        <div className="card shadow">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKKHOIfAxTI2hxAtSiBe2Qeh6M0c3GuIX0A&s"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">Category title</h4>
          </div>
          <div className="card-footer">
            Product Downloads: 2445 <i className="fa-solid fa-cloud-arrow-down"></i>
          </div>
        </div>
      </div>
      {/* Product Box End */}
    </>
  );
}
