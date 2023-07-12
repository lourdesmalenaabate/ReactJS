import React, { useState } from "react";
import BotonMensaje from "./BotonMensaje";
import "./Ejercicio.css";

const Ejercicio = () => {
  const [msg, setMsg] = useState("Haga Click para mostrar mensaje");
  const handleClick = (msg) => {
    setMsg(msg);
  };

  return (
    <div className="contenedor">
      <h1>{msg}</h1>
      <div className="contenedor-btn">
        <BotonMensaje
          texto="Mensaje 1"
          handleClick={handleClick}
          msg="Soy el mensaje del botón 1"
        />
        <BotonMensaje
          texto="Mensaje 2"
          handleClick={handleClick}
          msg="Soy el mensaje del botón 2"
        />
        <BotonMensaje
          texto="Mensaje 3"
          handleClick={handleClick}
          msg="Soy el mensaje del botón 3"
        />
      </div>
    </div>
  );
};

export default Ejercicio;
