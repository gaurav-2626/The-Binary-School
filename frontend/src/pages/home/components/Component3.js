// react libraries
import React from "react";

// stylesheets
import "../style/component3.css";

// components
import Video from "../../../core/Video.js";

const Component3 = () => {
  return (
    <div className="container-fluid scroll component3">
      <div className="row justify-content-center">
        <div className="col head">
          <div className="head-text">
            Why learn to <span>CODE </span>?
          </div>
        </div>
      </div>
      <div className="row justify-content-center body">
        <div className="col-sm-6">
          <div className="video-wrapper">
            <Video url="https://player.vimeo.com/video/117709376" />
          </div>
        </div>
        <div className="col-sm-6 body-text">
          Code is a medium of interaction between computers and humans. Coding
          is a fun tool to exercise one’s desire to build, curiosity to question
          and imagination to explore.
          <div>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component3;
