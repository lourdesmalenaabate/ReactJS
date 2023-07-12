import React from "react";

const ComponenteHijo = ({ numero, obj }) => {
  return (
    <>
      <h3>Número en Hook useState: {numero}</h3>
      <h3>Título en Hook useState obj: {obj.titulo}</h3>
      <h3>Número en Hook useState obj: {obj.numero}</h3>
    </>
  );
};

export default ComponenteHijo;
