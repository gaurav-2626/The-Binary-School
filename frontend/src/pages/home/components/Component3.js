import React from "react";
import "../style/component3.css"
import ReactPlayer from "react-player";

//assets
import videoLogo from "../../../uploads/component3.png";

const Component3 = () => {
    return (
        <div className="container-fluid scroll component3">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-sm-6 head">
                    <div className="head-text">Why learn to <span>CODE </span>?</div>
                </div>
            </div>
            <div className="row justify-content-center body">
                <div className="col-sm-6 col-12">
                    <div className="video-wrapper"><ReactPlayer className="react-player" url="https://www.youtube.com/watch?v=Dv7gLpW91DM" width="100%" height="100%" playing="true" controls={true} /></div>
                </div>
                <div className="col-sm-6 col-12 body-text">
                    Code is a medium of interaction between
                    computers and  humans. Coding is a fun tool
                    to exercise one’s desire to build, curiosity to
                    question and imagination to explore.
                    <div>
                        <button type="button" className="learn-more">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component3;