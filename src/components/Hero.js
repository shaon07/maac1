import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container className="container">
      <div className="row pt-5">
        <div className="col-12 col-md-8 mx-auto mt-5">
          <HeroHeading>
            Analytics that transform your product inside-out
          </HeroHeading>
          <div className="button-group d-flex justify-content-center gap-2 mt-4">
            <DemoButton>Request a Demo</DemoButton>
            <DownloadButton>Download</DownloadButton>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;

const Container = styled.div``;

const HeroHeading = styled.h2`
  font-size: 3rem;
  color: #0b141f;
  text-align: center;
`;

const DemoButton = styled.button`
  border: transparent;
  background: #0052cc;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
`;

const DownloadButton = styled.button`
  background-color: transparent;
  color: #0052cc;
  font-weight: bold;
  border: 2px solid #0052cc;
  padding: 0 20px;
  border-radius: 10px;
  box-shadow: 2px 2px;
`;
