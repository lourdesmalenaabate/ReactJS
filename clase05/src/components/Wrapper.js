import React from "react";

const Wrapper = (Componente, texto) => {
  return ({ ...props }) => {
    const transformarTexto = () => `Texto en Prop: ${texto}`;
    return (
      <div
        style={{ height: "15vh" }}
        className="me-auto ms-auto m-4 w-50 bg-info d-flex justify-content-center align-items-center fs-3 fw-bold">
        <Componente texto={transformarTexto()} {...props} />
      </div>
    );
  };
};

export default Wrapper;
