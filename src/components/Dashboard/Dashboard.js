/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getApiMethod,
  getAreaData,
  getRegionData
} from "../../Redux/actions/getData";
import AddArea from "./AddArea";
import AddGeo from "./AddGeo";
import Header from "./Header";

const Dashboard = () => {
  const token = useSelector((state) => state.postTokenReducer);
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  };
  const dispatch = useDispatch();
  const fetchRegion = () => {
    return (dispatch) => {
      try {
        fetch(
          "https://staging-api.erpxbd.com/api/v1/region/all/1",
          requestOptions
        )
          .then((res) => res.json())
          .then((res) => dispatch(getRegionData(res)));

        fetch(
          "https://staging-api.erpxbd.com/api/v1/area/All/5/1",
          requestOptions
        )
          .then((response) => response.json())
          .then((res) => {
            dispatch(getAreaData(res));
          });

        fetch("https://staging-api.erpxbd.com/api/v1/users", requestOptions)
          .then((res) => res.json())
          .then((res) => {
            dispatch(getApiMethod(res));
          });
      } catch (error) {
        dispatch(getRegionData(error.massage));
        dispatch(getAreaData(error.massage));
      }
    };
  };
  useEffect(() => {
    dispatch(fetchRegion());
  });

  const [modalShow, setModalShow] = useState(false);
  const [area, setArea] = useState(1);
  const [tag, setTag] = useState("> Region");
  return (
    <div className="bg-white container-fluid">
      <Header />
      <div className="row">
        <Menu className="menus col-2 py-3 px-4">
          <h6>menu</h6>
          <div className="selection d-flex justify-content-evenly align-items-center py-3">
            <GeoWithIcon className="geoWithIcon">
              <p>
                <i className="fa-solid fa-location-dot mx-1"></i>
                <span className="geoWithoutIcon">Geo Informations</span>
              </p>
              <div>
                <p
                  className={`${area === 1 ? "text-primary" : "null"}`}
                  onClick={() => {
                    setArea(1);
                    setTag("> Region");
                  }}
                >
                  <i className="fa-solid fa-map-location mx-1"></i>
                  <span className="geoWithoutIcon">Region</span>
                </p>
                <p
                  className={`${area === 2 ? "text-primary" : "null"}`}
                  onClick={() => {
                    setArea(2);
                    setTag("> Area");
                  }}
                >
                  <i className="fa-solid fa-globe mx-1"></i>
                  <span className="geoWithoutIcon">Area</span>
                </p>
              </div>
            </GeoWithIcon>
          </div>
        </Menu>
        <DashboardArea
          className="col-10 p-4 rounded"
          style={{ background: "#F5F5F5" }}
        >
          <div className="dashboardHeader p-3 ">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="list">
                <h6>Region List</h6>
                <p>Geo > Geo List {tag}</p>
              </div>
              <div className="list_button">
                <button
                  onClick={() => {
                    setModalShow(true);
                  }}
                >
                  +Create new
                </button>
              </div>
            </div>
          </div>

          <DashContent>
            {area === 1 ? (
              <AddGeo
                modalShow={modalShow}
                setModalShow={setModalShow}
                area={area}
              />
            ) : (
              <AddArea
                modalShow={modalShow}
                setModalShow={setModalShow}
                area={area}
              />
            )}
          </DashContent>
        </DashboardArea>
      </div>
    </div>
  );
};

export default Dashboard;

const Menu = styled.div`
  height: 89vh;
  p {
    cursor: pointer;
  }
`;
const DashboardArea = styled.div`
  button {
    background-color: #0b2e4e;
    color: white;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
`;

const DashContent = styled.div``;
const GeoWithIcon = styled.div`
  width: 100%;
  margin-top: 26px;
  padding: 0 10px;
`;
