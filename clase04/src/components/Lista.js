import React from "react";

const Lista = ({ lista }) => {
  return (
    <div className="d-flex justify-content-center">
      <ul className="w-50 border border-2 border-primary d-flex justify-content-evenly align-items-center">
        {lista.map((el, index) => (
          <li key={`${el}-${index}`}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
