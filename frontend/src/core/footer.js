// react libraries
import React from "react";
import { Link, withRouter } from "react-router-dom";

// stylesheets
import "./helper/footer.css";

// components
import { ReactComponent as LocationIcon } from "../uploads/pin.svg";
import { ReactComponent as MailIcon } from "../uploads/email.svg";
import { ReactComponent as FacebookIcon } from "../uploads/facebook.svg";
import { ReactComponent as TwitterIcon } from "../uploads/twitter.svg";
import { ReactComponent as InstaIcon } from "../uploads/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../uploads/youtube.svg";
import { ReactComponent as LinkedinIcon } from "../uploads/linkedin.svg";

const Footer = () => {
  // TODO: here window.innerWidth should be replaced by something dynamic and local attribute
  const startY = 200;
  const endY = 200;
  const footerHeight = 450;
  const a = [0, startY];
  const b = [window.innerWidth, endY];
  const c = [window.innerWidth, endY + footerHeight];
  const d = [0, endY + footerHeight];

  const c1 = [0.75 * window.innerWidth, endY + 0.5 * footerHeight];
  const c2 = [0.6 * window.innerWidth, startY - 0.85 * footerHeight];

  const c3 = [0.45 * window.innerWidth, startY - footerHeight];
  const c4 = [0.55 * window.innerWidth, endY + 0.5 * footerHeight];
  const path1 = (
    <path
      d={`
        M ${a}
        C ${c1} ${c2} ${b}
        L ${c}
        L ${d}
        L ${a}
      `}
      fill="url(#gradient1)"
    />
  );
  const path2 = (
    <path
      d={`
        M ${a}
        C ${c3} ${c4} ${b}
        L ${c}
        L ${d}
        L ${a}
      `}
      fill="url(#gradient2)"
    />
  );
  const footerVectors = (
    <div className="footer-vectors">
      <svg height="650" width="100%">
        <defs>
          <linearGradient id="gradient1" x1="65%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FDB797" />
            <stop offset="100%" stopColor="#C94B4B" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C94B4B" />
            <stop offset="100%" stopColor="#474157" />
          </linearGradient>
        </defs>
        {path1}
        {path2}
      </svg>
    </div>
  );
  const footerNav = (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/team">
            CONTACT US
          </Link>
        </li>
        <span className="nav-link-partition">|</span>
        <li className="nav-item">
          <Link className="nav-link" to="/course">
            BLOGS
          </Link>
        </li>
        <span className="nav-link-partition">|</span>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            CAREERS
          </Link>
        </li>
        <span className="nav-link-partition">|</span>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            PRIVACY POLICY
          </Link>
        </li>
        <span className="nav-link-partition">|</span>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            TERMS & CONDITION
          </Link>
        </li>
      </ul>
    </div>
  );
  const footerItems = (
    <div className="footer-items">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <div className="address">
              <LocationIcon
                height="30px"
                width="30px"
                fill="white"
                className="mx-3"
              />
              Building - XYZ, Cyber City, Gurugram, Haryana, India
            </div>
            <div className="support-email">
              <MailIcon
                height="30px"
                width="30px"
                fill="white"
                className="mx-3"
              />
              support@thebinaryschool.com
            </div>
            <div className="media-handlers px-1">
              <TwitterIcon
                height="45px"
                width="45px"
                fill="white"
                className="m-3"
              />
              <FacebookIcon
                height="45px"
                width="45px"
                fill="white"
                className="m-3"
              />
              <LinkedinIcon
                height="45px"
                width="45px"
                fill="white"
                className="m-3"
              />
              <InstaIcon
                height="45px"
                width="45px"
                fill="white"
                className="m-3"
              />
              <YoutubeIcon
                height="45px"
                width="45px"
                fill="white"
                className="m-3"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="horizontal-line" />
      {footerNav}
      <div className="copyright text-center">
        Copyright 2021 The Binary School LLC. All rights reserved.
      </div>
    </div>
  );
  return (
    <div>
      {footerItems}
      {footerVectors}
    </div>
  );
};

export default withRouter(Footer);
