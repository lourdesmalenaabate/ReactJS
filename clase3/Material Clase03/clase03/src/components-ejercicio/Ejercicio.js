import React, { useState } from "react";
import Formulario from "./Formulario";
import Vista from "./Vista";

const Ejercicio = () => {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e, texto) => {
    e.preventDefault();
    setTexto(texto);
  };
  return (
    <div className="contenedor ">
      <Formulario handleSubmit={handleSubmit} />
      <Vista texto={texto} />
    </div>
  );
};

export default Ejercicio;
