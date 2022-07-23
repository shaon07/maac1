import React from "react";
import Slider from "react-slick";

import styled from "styled-components";

const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Container className="container py-5">
      <div className="row">
        <div className="div text-center">
          <h3>5,000+ high-impact teams rely on Fieldx</h3>
        </div>
        <div className="slider py-3 text-center">
          <Slider {...settings} className="py-5">
            <div>
              <img
                src={require("../assets/images/Aven.png")}
                alt="aven"
                className="img-fluid mx-auto"
              />
            </div>
            <div>
              <img
                src={require("../assets/images/Amara.png")}
                alt="amara"
                className="img-fluid mx-auto"
              />
            </div>
            <div>
              <img
                src={require("../assets/images/Circle.png")}
                alt="Circle"
                className="img-fluid mx-auto"
              />
            </div>
            <div>
              <img
                src={require("../assets/images/Kyan.png")}
                alt="Circle"
                className="img-fluid mx-auto"
              />
            </div>
            <div>
              <img
                src={require("../assets/images/Treva.png")}
                alt="Circle"
                className="img-fluid mx-auto"
              />
            </div>
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Brands;

const Container = styled.div`
  h3 {
    color: #0052cc;
    font-weight: bold;
  }
`;
