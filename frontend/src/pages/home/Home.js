// react libraries
import React from "react";

// header and footer
import Header from "../../core/Header.js";
import Footer from "../../core/Footer.js";
import Video from "../../core/Video.js";

// components
import Component1 from "./components/Component1.js";
import Component2 from "./components/Component2.js";
import Component3 from "./components/Component3.js";
import Component5 from "./components/Component5.js";
import Component4 from "./components/Component4.js";

const Home = () => {
  return (
    <div>
      <Header />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Footer />
    </div>
  );
};

export default Home;
