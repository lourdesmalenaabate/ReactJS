import React from "react";
import "./Boton.css";

const Boton = ({ ruta, clases, texto }) => {
  return (
    <a href={ruta} className={clases}>
      {texto}
    </a>
  );
};

export default Boton;
