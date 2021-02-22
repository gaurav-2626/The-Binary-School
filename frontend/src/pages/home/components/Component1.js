// react libraries
import React from "react";

// stylesheets
import "../style/component1.css";

// components
import { ReactComponent as SVG1 } from "../../../uploads/illustration1.svg";

const Component1 = () => {
  return (
    <div className="container-fluid component-box">
      <div className="row justify-content-center">
        <div className="col component1">
          <div className="row">
            <div className="col-6">
              <div className="head-text">
                LEARN THE MAGIC OF <span>COMPUTERS</span>
              </div>
              <div className="body-text">
                Do you want to learn how this digital world around you works? If{" "}
                <span>yes</span>, then sit tight and come with us on this
                exciting journey.
              </div>
            </div>
            <div className="col-6 svg1-box">
              <SVG1 className="svg1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
