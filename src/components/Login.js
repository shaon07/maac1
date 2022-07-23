import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getApiUser, postToken } from "../Redux/actions/getData";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Login = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [Error, setError] = useState();
  const [show, setShow] = useState(true);

  const [userInfo, setUserInfo] = useState({
    employeeId: "",
    password: "",
  });
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userInfo),
  };
  return (
    <Container className="container-fluid">
      <Navbar />
      <div className="main">
        <Wrapper className="mx-auto text-center titleContainer bg-white p-5 ">
          <Titles className="titles">
            <h3>Welcome Back!</h3>
            <h6>Please login to your account</h6>
            <Pre>{Error}</Pre>
            <div
              className="text-center"
              style={{ display: show ? "none" : "block" }}
            >
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            <Form
              className="py-4"
              onSubmit={(e) => {
                e.preventDefault();
                setShow(!show);

                fetch(
                  "https://staging-api.erpxbd.com/api/v1/users/login",
                  options
                )
                  .then((response) => response.json())
                  .then((result) => {
                    dispatch(postToken(result.token));
                    if (typeof result.token == "string") {
                      nav("/dashboard");
                      dispatch(getApiUser(result))
                    } else {
                      setError("employeeId or Password Not matched");
                    }
                  })
                  .catch((error) => {
                    setError(error);
                  });

                setUserInfo({
                  employeeId: "",
                  password: "",
                });
              }}
            >
              <input
                className="shaon"
                type="text"
                value={userInfo.employeeId}
                name=""
                required
                onChange={(e) => {
                  setUserInfo({ ...userInfo, employeeId: e.target.value });
                }}
                placeholder="Enter Your employeeId"
              />
              <br />
              <input
                className="shaon"
                type="password"
                required
                value={userInfo.password}
                name=""
                onChange={(e) => {
                  setUserInfo({ ...userInfo, password: e.target.value });
                }}
                placeholder="Enter Your Password"
              />
              <br />

              <Button type="submit">Sign in</Button>

              <div className="LoginText p-5">
                <H5>
                  Don't have an account?{" "}
                  <Link to="/register">
                    <span>Sign Up</span>
                  </Link>
                </H5>
              </div>
            </Form>
          </Titles>
        </Wrapper>
      </div>
      <Footer />
    </Container>
  );
};

export default Login;

const Container = styled.div``;
const Wrapper = styled.div`
  width: 70%;
  h3 {
    font-size: 2rem;
    font-weight: bold;
  }
  h6 {
    color: #4e4e4e;
    font-weight: 400;
  }
`;

const Titles = styled.div`
  width: 50%;
  margin: auto;
`;

const Form = styled.form`
  .shaon {
    width: 100%;
    border: none;
    border-bottom: 2px solid #e1e1e1;
    padding-bottom: 10px;
    margin: 10px 0;
  }
`;

const Button = styled.button`
  color: white;
  border: none;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #0052cc;
`;

const H5 = styled.h5`
  font-size: 1rem;
  span {
    color: #0052cc;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Pre = styled.pre`
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 1rem;
  color: red;
  font-weight: bold;
`;
