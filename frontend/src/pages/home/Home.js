// react libraries
import React from "react";

//header and footer
import Footer from "../../core/Footer.js";
import Header from "../../core/Header.js";

//components
import Component1 from "./components/Component1.js"
import Component3 from "./components/Component3.js";

const Home = () => {
  return (
    <div>
      <Header />
      <Component3 />
      <Footer />
    </div>
  );
};

export default Home;
