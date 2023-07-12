import React from "react";

const Boton = ({
  mostrar,
  setMostrar,
  handleStateChange,
  texto,
  handleClick1,
}) => {
  const handleClick = () => (mostrar ? setMostrar(false) : setMostrar(true));
  if (texto) {
    return (
      <button className="btn btn-outline-primary m-2" onClick={handleClick1}>
        {texto}
      </button>
    );
  }
  return (
    <>
      <button className="btn btn-outline-primary m-2" onClick={handleClick}>
        {mostrar ? "Mostrar" : "Ocultar"}
      </button>
      <button
        className="btn btn-outline-primary m-2"
        onClick={handleStateChange}>
        {mostrar ? "Mostrar" : "Ocultar"}
      </button>
    </>
  );
};

export default Boton;
