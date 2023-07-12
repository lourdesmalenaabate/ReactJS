import React from "react";

const BotonMensaje = ({ texto, handleClick, msg }) => {
  return (
    <button className="boton" onClick={() => handleClick(msg)}>
      {texto}
    </button>
  );
};

export default BotonMensaje;
