import React from "react";
import { Link } from "react-router-dom";

export default function MobileNavbar(props) {
  return (
    <div className="mobile-navbar">
      <Link to="/">
        <span className="mobile-icon">Home</span>
      </Link>
      <Link to="/dashboard">
        <span className="mobile-icon">Dashboard</span>
      </Link>
      <Link to="/addStonk">
        <span className="mobile-icon">+</span>
      </Link>
      <Link to="/irr">
        <span className="mobile-icon">IRR</span>
      </Link>
    </div>
  );
}
