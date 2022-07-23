import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <ContainerFluid className="container-fluid py-5">
      <Container className="container py-4">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <img
              src={require("../assets/images/footerlogo.png")}
              alt="logo"
              className="img-fluid"
            />
            <p className="text-white w-50 text-center py-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque.
            </p>
            <Brands className="brands d-flex gap-4">
              <i className="fa-brands fa-facebook text-white"></i>
              <i className="fa-brands fa-linkedin-in text-white"></i>
              <i className="fa-brands fa-twitter text-white"></i>
            </Brands>
          </div>

          <div className="copyright text-center pt-5">
            <h6 className="text-white">
              © All rights reserve by{" "}
              <span style={{ color: "#F60E0E" }}>MAAC</span>
            </h6>
          </div>
        </div>
      </Container>
    </ContainerFluid>
  );
};

export default Footer;

const ContainerFluid = styled.div`
  background-color: #00193d;
`;

const Container = styled.div``;

const Brands = styled.div`
  i {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
