import React from "react";
import "../style/component3.css"
import ReactPlayer from "react-player";

//assets
import videoLogo from "../../../uploads/component3.png";

const Component3 = () => {
    return (
        <div className="container-fluid scroll component3">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="head-text">Why learn to <span>CODE </span>?</div>
                </div>
            </div>
            <div className="row justify-content-center body">
                <div className="col-5">
                    <ReactPlayer url="https://www.youtube.com/watch?v=Dv7gLpW91DM" className="" width="97%" playing="true" controls={true} />
                </div>
                <div className="col-5 body-text">
                    Code is a medium of interaction between 
                    computers and  humans. Coding is a fun tool 
                    to exercise one’s desire to build, curiosity to 
                    question and imagination to explore.
                    <div>
                        <button type="button" className="btn btn-danger learn-more">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component3;