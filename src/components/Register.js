import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Register = () => {
  const nav = useNavigate()
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    employeeId: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: "",
    role: "",
  });
  const requestOptions = {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userInfo),
  };
  return (
    <Container className="container-fluid">
      <Navbar />
      <div className="main">
        <Wrapper className="mx-auto RestitleContainer text-center bg-white p-5 ">
          <Titles className="Restitles">
            <h3>Create Account</h3>
            <h6>Fill in the details below to create an account</h6>

            <Form
              className="py-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (userInfo.password === userInfo.passwordConfirm) {
                  fetch(
                    "https://staging-api.erpxbd.com/api/v1/users/signup",
                    requestOptions
                  )
                    .then((response) => response.json())
                    .then((result) => {
                      nav('/login')
                    })
                    .catch((error) => console.log("error", error));
                  console.log(userInfo);
                } else {
                  console.log("password not matched");
                }
              }}
            >
              <input
                className="shaon"
                type="text"
                name=""
                required
                value={userInfo.name}
                placeholder="Enter Your Full Name"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, name: e.target.value })
                }
              />
              <br />
              <input
                className="shaon"
                type="email"
                name=""
                required
                value={userInfo.email}
                placeholder="Enter Your Email"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
              <br />
              <input
                className="shaon"
                type="text"
                required
                value={userInfo.employeeId}
                name=""
                placeholder="Your ID"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, employeeId: e.target.value })
                }
              />
              <br />
              <input
                className="shaon"
                type="number"
                name=""
                required
                value={userInfo.phoneNumber}
                placeholder="Your Mobile Number"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, phoneNumber: e.target.value })
                }
              />
              <br />
              <input
                className="shaon"
                type="password"
                name=""
                required
                value={userInfo.password}
                placeholder="password"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
              />
              <br />
              <input
                className="shaon"
                type="password"
                name=""
                required
                value={userInfo.passwordConfirm}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, passwordConfirm: e.target.value })
                }
                placeholder="Confirm Password"
              />
              <br />
              <select
                className="form-select"
                aria-label="Default select example"
                value={userInfo.role}
                required
                onChange={(e) =>
                  setUserInfo({ ...userInfo, role: e.target.value })
                }
              >
                <option selected>
                  Select Your <i className="fas fa-meh-rolling-eyes    "></i>
                </option>
                <option value="HUB">HUB</option>
              </select>

              <CheckBox className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  required
                  id="defaultCheck1"
                />
                <label className="form-check-label" for="defaultCheck1">
                  I read and agree to the <span>Terms & Conditions</span>
                </label>
              </CheckBox>

              <Button type="submit">Create Account</Button>

              <div className="LoginText p-5">
                <H5>
                  Already have an account?{" "}
                  <Link to="/login">
                    <span>Sign In</span>
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

export default Register;
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
const CheckBox = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;

  span {
    color: #0052cc;
    font-weight: bold;
    cursor: pointer;
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
