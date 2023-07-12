import React from "react";

const Vista = ({ texto }) => {
  return (
    <div>
      <h2>{texto ? texto : "Ingrese texto a mostrar"}</h2>
    </div>
  );
};

export default Vista;
