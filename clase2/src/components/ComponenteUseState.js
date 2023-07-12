import React, { useState } from "react";
import ComponenteHijo from "./ComponenteHijo";

const ComponenteUseState = () => {
  const [titulo, setTitulo] = useState("Este texto se convierte en State");
  const [numero, setNumero] = useState(1);
  const [obj, setObj] = useState({
    titulo: "Un título",
    numero: 2,
  });

  return (
    <>
      <h2>{titulo}</h2>
      <ComponenteHijo numero={numero} obj={obj} />
    </>
  );
};

export default ComponenteUseState;
