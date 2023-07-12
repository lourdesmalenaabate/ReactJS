import React from "react";

const Hijo = ({ contador, incrementarContador, texto, cambiarTexto }) => {
  return (
    <>
      <h2>Componente Hijo</h2>
      <p>Valor Actual en el State del Padre: {contador}</p>
      <button onClick={incrementarContador}>
        Cambiar valor del State del Padre
      </button>
      <br />
      <p>{texto}</p>
      <button onClick={() => cambiarTexto("Texto agregado desde Hijo")}>
        Agregar Texto
      </button>
    </>
  );
};

export default Hijo;
