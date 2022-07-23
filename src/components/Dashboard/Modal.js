import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import styled from "styled-components";

function GeoModal(props) {
  const data = useSelector((state) => state.getRegion);
  const slt = !data.data[0] ? "" : data.data[0].region;
  const token = useSelector((state) => state.postTokenReducer);
  const [name, setName] = useState("");

  const [areaInfo, setAreaInfo] = useState({
    name: "",
    region: "",
  });

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.token}`,
    },
    body: JSON.stringify({ name: name }),
  };

  const areaoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.token}`,
    },
    body: JSON.stringify(areaInfo),
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props.area !== 2 ? (
        <Modal.Body className="mx-auto" style={{ width: "90%" }}>
          <div className="containere">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                fetch("https://staging-api.erpxbd.com/api/v1/region", options)
                  .then((response) => response.json())
                  .then((result) => {
                    console.log(result);
                    setName("");
                  })
                  .catch((error) => console.log("error", error));
              }}
            >
              <ModelTitle className="d-flex flex-column">
                <p>Region</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name=""
                  placeholder="Type Region"
                  id=""
                />
              </ModelTitle>
              <Button className="d-flex justify-content-end">
                <button type="submit">Add Region</button>
              </Button>
            </form>
          </div>
        </Modal.Body>
      ) : (
        <Modal.Body className="mx-auto" style={{ width: "90%" }}>
          <div className="containere">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(areaInfo);
                fetch("https://staging-api.erpxbd.com/api/v1/area", areaoptions)
                  .then((response) => response.json())
                  .then((result) => {
                    console.log(result);
                    setAreaInfo({
                      name: "",
                      region: "",
                    });
                    alert("api not working")
                  })
                  .catch((error) => console.log("error", error));
              }}
            >
              <ModelTitle className="d-flex flex-column">
                <p>Region</p>
                <select
                  className="form-select"
                  value={areaInfo.name}
                  onChange={(e) =>
                    setAreaInfo({ ...areaInfo, name: e.target.value })
                  }
                  aria-label="Default select example"
                >
                  <option selected>
                    Select Your <i className="fas fa-meh-rolling-eyes    "></i>
                  </option>
                  {slt ? (
                    slt.map((item, ind) => {
                      return (
                        <option value={item.name} key={ind}>
                          {item.name}
                        </option>
                      );
                    })
                  ) : (
                    <option value="1">HUB</option>
                  )}
                </select>
                <input
                  value={areaInfo.region}
                  onChange={(e) =>
                    setAreaInfo({ ...areaInfo, region: e.target.value })
                  }
                  type="text"
                  name=""
                  placeholder="Add Area"
                  id=""
                />
                <br />
              </ModelTitle>
              <Button className="d-flex justify-content-end">
                <button type="submit">Add Area</button>
              </Button>
            </form>
          </div>
        </Modal.Body>
      )}
    </Modal>
  );
}

export default GeoModal;

const ModelTitle = styled.div`
  p {
    margin: 0;
  }
  input {
    margin: 10px 0;
    padding: 5px 10px;
    border: none;
    border-bottom: 1.5px solid grey;
  }
`;
const Button = styled.div`
  button {
    border: none;
    background: #0b2e4e;
    color: white;
    padding: 7px 20px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
