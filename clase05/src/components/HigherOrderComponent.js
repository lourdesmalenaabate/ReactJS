import React from "react";
import Wrapper from "./Wrapper";

const Span = ({ texto }) => <span className="text-center">{texto}</span>;
const Parrafo = ({ texto }) => <p className="m-0">{texto}</p>;

const ComponenteSpan = Wrapper(Span, "Muestro otro elemento");
const ComponenteSpan2 = Wrapper(Span, "Otro texto");
const ComponenteParrafo = Wrapper(Parrafo, "Una prop");

const HigherOrderComponent = () => {
  return (
    <div>
      <h2>HOC's</h2>
      <p>
        Son una implementación de la comunidad que aprovecha la funcionalidad de
        las Higher Order Function para reutilizar lógica entre Componentes
      </p>
      <ComponenteSpan />
      <ComponenteParrafo />
      <ComponenteSpan2 />
    </div>
  );
};

export default HigherOrderComponent;
