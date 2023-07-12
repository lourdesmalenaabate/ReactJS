import React from "react";

const ComponentePadre = (props) => {
  const styles = {
    width: "350px",
    height: "250px",
  };

  return (
    <div
      style={styles}
      className="d-flex flex-column justify-content-center align-items-center border border-3 border-primary bg-secondary text-white mt-4 m-auto">
      {props.children}
    </div>
  );
};

export default ComponentePadre;
