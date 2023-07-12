import React from "react";

const BotonMensaje = ({ texto, handleClick, msj }) => {
  /* { texto, handleClick, msj } => Desestructuración de Objeto. Permite el llamado a las propiedades dentro del objeto props sin necesidad de llamarlo constantemente */
  return (
    <button className="boton" onClick={() => handleClick(msj)}>
      {texto}
    </button>
  );
};

export default BotonMensaje;
