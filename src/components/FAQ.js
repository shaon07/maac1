import React from "react";
import styled from "styled-components";
import Accordion from "./Accordion";

const FAQ = () => {
  const faqs = [
    {
      title: "What kind of data can I see in FieldX?",
    },
    {
      title: "How do you take payments?",
    },
    {
      title: "Does Bizzy read my customers' data?",
    },
    {
      title: "Can I also track website analytics on fieldX?",
    },
    {
      title: "What's your refund and cancellation policy?",
    },
    {
      title: "What makes Bizzy different from other analytics tools?",
    },
  ];
  return (
    <ContainerFluid
      className="container-fluid py-5"
      img={require("../assets/images/cover2.png")}
    >
      <Container className="py-5">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h6>Common Question </h6>
            <h3>Frequently asked questions</h3>
          </div>
        </div>

        <Accordions className="accordions row">
          <div className="col-12 col-md-6">
            {faqs.slice(0,3).map((item, ind) => {
              return (
                <div
                  className=" mx-auto  justify-content-between "
                  key={ind}
                >
                  <Accordion item={item} />
                </div>
              );
            })}
          </div>
          <div className="col-12 col-md-6">
            {faqs.slice(3,6).map((item, ind) => {
              return (
                <div
                  className=" mx-auto  justify-content-between "
                  key={ind}
                >
                  <Accordion item={item} />
                </div>
              );
            })}
          </div>
        </Accordions>
      </Container>
    </ContainerFluid>
  );
};

export default FAQ;

const ContainerFluid = styled.div`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  position: relative;
  z-index: 1;
  color: white;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #022dff87;
    position: absolute;
    z-index: -1;
  }
`;
const Container = styled.div`
  h3 {
    font-size: 2.3rem;
  }
`;

const Accordions = styled.div`
  width: 80%;
  margin: 2rem auto;
`;
