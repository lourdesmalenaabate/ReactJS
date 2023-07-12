import React from "react";
import ComponenteHijo from "./ComponenteHijo";
import ComponentePadre from "./ComponentePadre";

const Composicion = () => {
  return (
    <>
      <h2>Composicion</h2>
      <p>
        Crear visualizaciones dinámicas, usando los elementos en el Componente
        contenedor
      </p>
      <ComponentePadre>
        <ComponenteHijo texto="Un texto" />
        <ComponenteHijo texto="Otro texto" />
      </ComponentePadre>
      <ComponentePadre>
        <ComponenteHijo texto="Un texto" />
        <ComponenteHijo texto="Otro texto" />
      </ComponentePadre>
    </>
  );
};

export default Composicion;
