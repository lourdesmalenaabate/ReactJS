import React from "react";

const Lista = ({ lista }) => {
  const styles = {
    width: "50%",
    maxWidth: "500px",
    height: "200px",
  };
  return (
    <div
      style={styles}
      className="border border-2 border-danger d-flex justify-content-center align-items-center">
      <ul className="list-unstyled">
        {lista.map((el, index) => (
          <li key={`${el}-${index}`}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
