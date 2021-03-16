import React from "react";

import "../../style/component6.css";
import  image1 from  "../../../../uploads/component6/image1.jpg";

const Component6 = () => {
   
    const title = (
        <div className = "head">
            <div className = "title">
                Our <span>DIARIES</span>
            </div>
        </div>
    );
   
    const Carousel = (
        <div class="card">
            <img src = {image1} class="card-img-top"></img>
            <div class="card-body">
                <h5 class="card-title">How to get the most out of NEP ?</h5>
                <p class="card-text">Some quick example text to build on 
                the card title and make up the bulk of the 
                card's content.Some quick example text to build on 
                the card title and make up the bulk of the 
                card's content.</p>
            </div>
        </div>
    );

    return (
       <div className="component6">
            {title}
            {Carousel}
       </div>
    );
};

export default Component6;