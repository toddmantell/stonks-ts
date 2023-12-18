import React, { useContext } from "react";
import UserContext from "../../data/context/UserContext";
import { Link } from "react-router-dom";
import { Dashboard, House, Report, PlusOne } from "@mui/icons-material";

export default function DesktopHeader(props) {
  const context = useContext(UserContext);
  return (
    <header className="app-header">
      <div className="app-header container">
        <div className="app-header banner">
          <a
            className="logo-name"
            href="https://knowyourmeme.com/memes/stonks"
            target="_blank"
            rel="noopener noreferrer"
          >
            STONKS!
          </a>

          <nav className="header nav">
            {" "}
            <Link to="/" className="nav-item">
              <span className="icon">
                <House />
              </span>{" "}
              Home
            </Link>
            <Link to="/dashboard" className="nav-item">
              <span className="icon">
                <Dashboard />
              </span>{" "}
              Dashboard
            </Link>
            <Link to="/addStonk" className="nav-item">
              <span className="icon">
                <PlusOne />
              </span>{" "}
              Add Stonks
            </Link>
            <Link to="/irr" className="nav-item">
              <span className="icon">
                <Report />
              </span>{" "}
              IRR
            </Link>
            <span className="nav-item user-name">
              USER: {context.state.user.name}
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
}
