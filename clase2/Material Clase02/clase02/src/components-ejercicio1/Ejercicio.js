import React, { useState } from "react";
import BotonMensaje from "./BotonMensaje";

const Ejercicio = () => {
  const [mensaje, setMensaje] = useState("Haga click para mostrar mensaje");
  const handleClick = (msj) => {
    setMensaje(msj);
  };
  return (
    <div className="contenedor">
      <h1>{mensaje}</h1>
      <div className="contenedor-btn">
        <BotonMensaje
          texto="Mensaje 1"
          handleClick={handleClick}
          msj="Mensaje 1"
        />
        <BotonMensaje
          texto="Mensaje 2"
          handleClick={handleClick}
          msj="Mensaje 2"
        />
        <BotonMensaje
          texto="Mensaje 3"
          handleClick={handleClick}
          msj="Mensaje 3"
        />
      </div>
    </div>
  );
};

export default Ejercicio;
