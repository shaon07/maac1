import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <ContainerFluid className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="wrapper d-flex justify-content-between py-3">
            <Link to="/">
              <div className="logo">
                <img src={require("../assets/images/logo.png")} alt="logo" />
              </div>
            </Link>
            <div className="menus d-flex gap-2">
              <Link to="/login">
                <LoginBtn>login</LoginBtn>
              </Link>
              <Link to="/register">
                <ResButton>registation</ResButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ContainerFluid>
  );
};

export default Navbar;

const ContainerFluid = styled.div``;

const LoginBtn = styled.button`
  background: #0052cc;
  color: white;
  border: 2px solid transparent;
  padding: 5px 15px;
  border-radius: 10px;
`;

const ResButton = styled.button`
  border: 2px solid #0052cc;
  color: #0052cc;
  background: transparent;
  border-radius: 10px;
  padding: 5px 15px;
  box-shadow: 2px 2px;
`;
