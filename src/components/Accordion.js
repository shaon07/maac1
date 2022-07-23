import React, { useState } from "react";

const Accordion = ({ item }) => {
  const [size, setSize] = useState(true);

  const tabs = {
    height: size ? "auto" : "auto",
    overflowY: "hidden",
  };
  return (
    <div className="px-3 bg-white text-dark rounded py-4 my-2" style={tabs}>
      <div className="d-flex justify-content-between align-items-center">
        <h6>{item.title}</h6>
        <i
          className={`fa-solid fa-angle-${size ? "right" : "down"}`}
          onClick={() => setSize(!size)}
          style={{cursor:"pointer"}}
        ></i>
      </div>
      <p className="pt-2" style={{ display: !size ? "block" : "none" }}>
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in voluptate.
      </p>
    </div>
  );
};

export default Accordion;
