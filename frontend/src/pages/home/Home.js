// react libraries
import React from "react";

//header and footer
import Footer from "../../core/Footer.js";
import Header from "../../core/Header.js";

//components
import Component1 from "./components/Component1.js";
import Component2 from "./components/Component2.js";

const Home = () => {
  return (
    <div>
      <Header />
      <Component1 />
      <Component2 />
      <Footer />
    </div>
  );
};

export default Home;
