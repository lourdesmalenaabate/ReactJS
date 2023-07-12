import React from "react";
import Parrafo from "./Parrafo";
import Span from "./Span";
import Wrapper from "./Wrapper";

const Texto = Wrapper(Parrafo, "Una prop");
const Texto2 = Wrapper(Span, "Muestro otro elemento");

const EjemploHOC = () => {
  return (
    <>
      <h2>Ejemplo HOC</h2>
      <Texto />
      <Texto2 />
    </>
  );
};

export default EjemploHOC;
