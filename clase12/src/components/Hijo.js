import React from "react";

const Hijo = ({ numero }) => {
  return (
    <div>
      <h3>Resultado de sumar {numero} y 1</h3>
      <h2>{numero + 1}</h2>
    </div>
  );
};

export default Hijo;
