/* eslint-disable eqeqeq */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const method = useSelector((state) => state.getApiMethod);
  const user = useSelector((state) => state.getApiMethod);
  const UserName = user.user.status == "success" ? user.user.user.name : "user";
  const filterdata =
    method.method.status === "success"
      ? method.method.data.users.filter(
          (item) => item.name.toLowerCase() == UserName
        )
      : "null";

  return (
    <ContainerFluid className="container-fluid py-2">
      <Container className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/">
            <img src={require("../../assets/images/logo.png")} alt="logo" />
          </Link>
          <div className="iconBox">
            <h4>
              <span>{filterdata[0].name}</span>
            </h4>
          </div>
        </div>
      </Container>
    </ContainerFluid>
  );
};

export default Header;

const ContainerFluid = styled.div``;
const Container = styled.div``;
