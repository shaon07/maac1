import React from "react";
import styled from "styled-components";

const Product = () => {
  const products = [
    {
      title: "Real-time analytics",
    },
    {
      title: "Intuitive dashboard",
    },
    {
      title: "Smart suggestions",
    },
    {
      title: "Multiple views",
    },
    {
      title: "AI-led diagnoses",
    },
    {
      title: "Responsive",
    },
  ];
  return (
    <Container className="container py-5">
      <div className="row">
        <div className="d-flex">
          <div className="Product_heading text-center mx-auto py-5 py-md-0">
            <H6 className="mt-5">Products Features</H6>
            <H3>Make more out of your data</H3>
          </div>
        </div>

        <div className="product_section row py-4">
          <div className="col-12 col-md-4">
            {products.slice(0, 3).map((item, ind) => {
              return (
                <div className="product_box text-center text-md-end p-3" key={ind}>
                  <img
                    src={require("../assets/images/icon.png")}
                    alt="icons"
                    style={{ width: "16%" }}
                    className="img-fluid"
                  />
                  <H4>{item.title}</H4>
                  <p className="text-muted " style={{width:"80%",marginLeft:"auto"}}>
                    See product usage, sign-ins, feature metrics change as users
                    work on your.
                  </p>
                </div>
              );
            })}
          </div>

          <div className="col-12 col-md-4">
            <img
              src={require("../assets/images/mobile.png")}
              alt="mobile"
              className="img-fluid"
            />
          </div>

          <div className="col-12 col-md-4">
            {products.slice(3, 6).map((item, ind) => {
              return (
                <div className="product_box text-center text-md-start p-3" key={ind}>
                  <img
                    src={require("../assets/images/icon.png")}
                    alt="icons"
                    style={{ width: "16%" }}
                    className="img-fluid"
                  />
                  <H4>{item.title}</H4>
                  <p className="text-muted" style={{width:"80%"}}>
                    See product usage, sign-ins, feature metrics change as users
                    work on your.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Product;

const H6 = styled.h6`
  color: #0052cc;
  font-weight: bold;
`;

const H3 = styled.h3`
  font-size: 2.5rem;
  color: #0b141f;
  font-weight: bold;
`;

const H4 = styled.h4`
  font-weight: bold;
`;

const Container = styled.div``;
