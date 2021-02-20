import React from "react";

//router
import { Link, withRouter } from "react-router-dom";

//css
import "./helper/header.css";

//assets
import companyLogo from "../uploads/{b}.svg";

//function
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg container-fluid header">
        <div className="navbar-brand">
          <img src={companyLogo} alt="logo" className="logo" />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/course">
                COURSE
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/team">
                TEAM
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <span className="login-button">LOGIN</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Header);
