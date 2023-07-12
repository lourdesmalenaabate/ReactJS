import React from "react";

const Composicion = (props) => {
  const styles = {
    width: "350px",
    height: "250px",
  };
  return (
    <div
      style={styles}
      className="d-flex flex-column justify-content-center align-items-center borber border-3 border-primary bg-secondary text-white m-4">
      {props.children}
    </div>
  );
};

export default Composicion;
