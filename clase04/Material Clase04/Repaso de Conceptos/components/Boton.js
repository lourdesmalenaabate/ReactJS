import React from "react";

const Boton = ({ mostrar, setMostrar }) => {
  const handleClick = () => {
    mostrar ? setMostrar(false) : setMostrar(true);
  };
  return (
    <button onClick={handleClick} className="btn btn-outline-danger m-2">
      {mostrar ? "Ocultar" : "Mostrar"}
    </button>
  );
};

export default Boton;
