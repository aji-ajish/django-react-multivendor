import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="list-group">
      <Link
        to="/customer/dashboard"
        className="list-group-item list-group-item-action active h3"
        aria-current="true"
      >
        Dashboard
      </Link>
      <Link to="/customer/orders" className="list-group-item list-group-item-action">
        Orders
      </Link>
      <Link to="/customer/wishlist" className="list-group-item list-group-item-action">
        Wishlist
      </Link>
      <Link to="/customer/address" className="list-group-item list-group-item-action">
        Addresses
      </Link>
      <Link to="/customer/profile" className="list-group-item list-group-item-action">
        Profile
      </Link>
      <Link to="/customer/change-password" className="list-group-item list-group-item-action">
        Change Password
      </Link>
      <Link
        to="/customer/login"
        className="list-group-item list-group-item-action bg-danger"
      >
        Logout
      </Link>
    </div>
  );
}
