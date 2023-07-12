import React, { useState } from "react";
import Listas from "./Listas";

const Renderizados = () => {
  const [texto, setTexto] = useState(
    "El Virtual DOM saca la foto con este texto"
  );
  const [bool, setBool] = useState(true);

  if (false) {
    return (
      <>
        <h2>La condición es true, por lo tanto tenemos esta vista</h2>
      </>
    );
  }

  return (
    <>
      <h2>Renderizado Condicional y Listas</h2>
      <h3>Renderizado Condicional</h3>
      <p>{texto}</p>
      {bool ? (
        <p>
          Cada vez que cambia el state, se saca una nueva foto para poner en el
          DOM Real
        </p>
      ) : (
        <p>
          Tenemos la capacidad de decir si queremos que algún elemento aparezca
          en la foto o no
        </p>
      )}
      {bool && <Listas />}
    </>
  );
};

export default Renderizados;
