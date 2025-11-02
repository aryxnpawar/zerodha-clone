import React from "react";
import Navbar from "../Navigationbar";
import Hero from "./Hero";
import Awards from "./Awards";
import Trust from "./Trust";
import Pricing from "./Pricing";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <>

      <Hero />
      <Awards />
      <Trust />
      <Pricing />

    </>
  );
};

export default HomePage;
