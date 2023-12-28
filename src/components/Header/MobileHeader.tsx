import React from "react";

export default ({ pageName = "STONKS" }) => (
  <div className="mobile-header">
    <div className="mobile-header-container">
      <span>
        <img
          className="mobile-header-image"
          style={{ height: "45px", width: "58px" }}
          src="../../../favicon.ico"
          alt="header-logo"
        />
      </span>
      <span className="mobile-header-text">{pageName}</span>
    </div>
  </div>
);
