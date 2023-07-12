import React from "react";

const TemaSecundario = ({ titulo, texto }) => {
  return (
    <div className="col-lg-8 pt-4 pb-4 pt-lg-0">
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </div>
  );
};

export default TemaSecundario;
