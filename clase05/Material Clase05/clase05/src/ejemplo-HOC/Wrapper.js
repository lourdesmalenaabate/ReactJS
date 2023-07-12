import React from "react";

const Wrapper = (Component, texto) => {
  return ({ ...props }) => {
    //Los HOC's nos permiten reutilizar lógica en varios componentes
    const transformarTexto = () => {
      return `Texto en Prop: ${texto}`;
    };
    return (
      <div
        style={{ height: "15vh" }}
        className="me-auto ms-auto m-4 w-50 bg-info d-flex justify-content-center align-items-center fs-3 fw-bold">
        <Component texto={transformarTexto()} {...props} />
      </div>
    );
  };
};

export default Wrapper;
