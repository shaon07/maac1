/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GeoModal from "./Modal";

const AddGeo = ({ modalShow, setModalShow }) => {
  const data = useSelector((state) => state.getRegion);
  
  
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(10);
  

  return (
    <Container className="container">
      <GeoModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="row">
        <div
          style={{ height: "auto" }}
          className=" geo-content d-flex justify-content-center align-items-center p-4 rounded bg-white"
        >
          {data.data[0] ? (
            <div className="w-100">
              <TopInput className="d-flex justify-content-end p-2 ">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  name=""
                  id=""
                  placeholder="Search Region Name"
                />
                <select
                  value={page}
                  onChange={(e) => setPage(e.target.value)}
                  className="custom-select"
                >
                  <option selected value={10}>
                    {" "}
                    10
                  </option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value={50 || data.data[0].region.length}>Full</option>
                </select>
              </TopInput>
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">
                      <input style={{ marginRight: "10px" }} type="checkbox" />
                      SL No.
                    </th>
                    <th scope="col">Region</th>
                  </tr>
                </thead>
                <tbody>
                  {data.data[0].status !== "success" ? (
                    <>
                      <div className="d-flex flex-column justify-content-center align-items-center p-3">
                        <h5>Login Please</h5>
                        <Link to="/login">
                          <button type="button" className="btn btn-primary">
                            goto login
                          </button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    data.data[0].region
                      .filter((item) =>
                        query
                          ? item.name
                              .toLowerCase()
                              .includes(query.toLowerCase())
                          : item.name
                      )
                      .slice(0, page)
                      .map((item, ind) => {
                        return (
                          <tr key={ind}>
                            <th scope="row">
                              <input
                                style={{ marginRight: "10px" }}
                                type="checkbox"
                              />
                              {ind + 1}
                            </th>
                            <td>{item.name}</td>
                          </tr>
                        );
                      })
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-geo text-center">
              <img
                src={require("../../assets/images/geo.png")}
                alt="geo"
                className="img-fluid"
              />
              <p className="p-2">
                Currently you have no Data. For next step first{" "}
                <span className="text-primary">Create Region</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default AddGeo;

const Container = styled.div``;

const TopInput = styled.div`
  input {
    margin: 5px;
    border: 1px solid darkgrey;
    border-radius: 30px;
    padding: 3px 10px;
  }
  select {
    margin: 5px;
    border: 1px solid darkgray;
    border-radius: 20px;
    padding: 5px 10px;
    width: 10rem;
  }
`;
