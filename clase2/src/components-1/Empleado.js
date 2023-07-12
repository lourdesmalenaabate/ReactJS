import React from "react";

const Empleado = ({ nombre, cargo, foto }) => {
  return (
    <div>
      <img src={foto} alt={nombre} width="200px" />
      <h3>{nombre}</h3>
      <h4>{cargo}</h4>
    </div>
  );
};

export default Empleado;
