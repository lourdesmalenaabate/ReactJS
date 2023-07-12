import React from "react";
import Composicion from "./Composicion";
import Texto from "./Texto";

const EjemploComposicion = () => {
  return (
    <>
      <Composicion>
        <p className="w-50 fs-5 m-0">Soy un childen de Composición</p>
      </Composicion>
      <Composicion>
        <Texto texto="Yo también soy un children" />
        <Texto texto="Un Componente puede tener tantos childen como sean necesarios" />
      </Composicion>
    </>
  );
};

export default EjemploComposicion;
