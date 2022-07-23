import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  const users = [
    {
      img: "monitor-mobbile",
      title: "10+",
      decs: "Platforms Created",
    },
    {
      img: "people",
      title: "1559+",
      decs: "Total Users",
    },
    {
      img: "cup",
      title: "10+",
      decs: "Total Clients",
    },
    {
      img: "user",
      title: "300 Days",
      decs: "In Operations",
    },
  ];
  return (
    <ContainerFluid
      className="container-fluid py-5"
      img={require("../assets/images/cover.png")}
    >
      <Container className="pt-5">
        <div className="row">
          <div className="col-12 col-lg-5 mx-auto text-center">
            <Countimg
              src={require("../assets/images/counts.png")}
              alt="counts"
              className="img-fluid"
            />
          </div>

          <div className="shaonabout col-12 col-lg-5 mx-auto">
            <H6 className="text-left text-md-center">About Us</H6>
            <H3 className="display-6 display-md-6">A dedicated solution for startups and enterprises</H3>
            <p className="text-muted py-3">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <div className="authorBox d-flex justify-content-start gap-4">
              <Avatar
                src={require("../assets/images/avatar.png")}
                alt="avater"
                className="img-fluid"
              />
              <div className="authorContent">
                <H7 className="text-muted">
                  "Fieldx is for teams that care about their product growth."
                </H7>
                <h6>CEO, FieldX</h6>
              </div>
            </div>
          </div>

          <div className="archivement row justify-content-center text-center py-4">
            {users.map((item, ind) => {
              return (
                <div className="col-6 my-2 col-md-3 py-3" key={ind}>
                  <Detail className="archivement-detail">
                    <img
                      src={require(`../assets/images/${item.img}.png`)}
                      alt="monitor"
                    />
                    <h6>{item.title}</h6>
                    <p>{item.decs}</p>
                  </Detail>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </ContainerFluid>
  );
};

export default AboutUs;

const ContainerFluid = styled.div`
  background-image: url(${(props) => props.img});
  background-position: top center;
  background-repeat: no-repeat;
  object-fit: cover;
`;
const Container = styled.div``;

const H6 = styled.h6`
  color: #0052cc;
  font-weight: bold;
`;

const H3 = styled.h3`
  color: #0b141f;
  font-weight: bold;
  font-size: 2.5rem;
`;
const H7 = styled.p`
  width: 70%;
  font-weight: 500;
  padding: 0;
  margin: 0;
`;

const Avatar = styled.img`
  width: 15%;
  height: 10%;
`;

const Countimg = styled.img`
  width: 80%;
  text-align: center;
  margin: auto;
`;

const Detail = styled.div`
  h6 {
    color: blue;
    font-weight: bold;
    padding: 10px;
    font-size: 2rem;
    margin: 0;
  }

  img {
    width: 15%;
  }
  p {
    color: grey;
    font-weight: 400;
  }
`;
