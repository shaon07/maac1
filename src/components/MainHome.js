import React from "react";
import styled from "styled-components";
import AboutUs from "./AboutUs";
import Brands from "./Brands";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Hero from "./Hero";
import HeroImage from "./HeroImage";
import Navbar from "./Navbar";
import Product from "./Product";

const MainHome = () => {
  return (
    <ContainerFluid className="container-fluid">
      <Navbar />
      <Hero />
      <HeroImage />
      <Product />
      <AboutUs />
      <FAQ />
      <Brands />
      <Footer />
    </ContainerFluid>
  );
};

export default MainHome;

const ContainerFluid = styled.div`
    
`
