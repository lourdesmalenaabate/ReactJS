import React from "react";

const ComponenteConProps = (props) => {
  return (
    <>
      <h2>Props</h2>
      <p>
        Las props son un objeto inherente a todo Componente de React. A
        diferencia del State, los valos almacenados dentro de este objeto se
        obtienen de un Componente Padre
      </p>
      <h3>Renderizado del Valor en Prop</h3>
      <p>{props.texto}</p>
      <h3>
        Renderiza el Valor de State en App porque lo recibe de su Padre
        ComponenteClase
      </h3>
      <p>{props.propDrilling}</p>
    </>
  );
};

export default ComponenteConProps;
