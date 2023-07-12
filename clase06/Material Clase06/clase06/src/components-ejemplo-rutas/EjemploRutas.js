import React from "react";
import { BrowserRouter } from "react-router-dom";
import Rutas from "./Rutas";

const EjemploRutas = () => {
  return (
    <>
      <BrowserRouter>
        <Rutas />
      </BrowserRouter>
    </>
  );
};

export default EjemploRutas;
