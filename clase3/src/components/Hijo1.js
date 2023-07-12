import React from "react";

const Hijo1 = (props) => {
  //Destructuración de props
  const { otroTexto, setTexto, input } = props;
  return (
    <>
      <h2>Hijo 1</h2>
      <h3>Objeto Props</h3>
      <p>{props.otroTexto}</p>
      <h3>Objeto Props Destructurado</h3>
      <p>{otroTexto}</p>
      <h3>Evento Click para cambiar State del Padre</h3>
      <button onClick={() => setTexto("Cambio el texto con el Evento Click")}>
        Cambiar texto
      </button>
      <h3>Valor en el Input del Formulario en Hijo 2</h3>
      {input && <span>{input}</span>}
    </>
  );
};

export default Hijo1;
