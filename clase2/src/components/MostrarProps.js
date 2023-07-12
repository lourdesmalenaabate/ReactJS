import React from "react";

const MostrarProps = ({
  datoString,
  datoNumber,
  datoBoolean,
  funcion,
  obj,
  arr,
}) => {
  return (
    <>
      <h3>Datos pasados por Prop</h3>
      <ul>
        <li>string: {datoString}</li>
        <li>number: {datoNumber}</li>
        <li>boolean: {datoBoolean.toString()}</li>
        <li>funcion: {funcion()}</li>
        <li>Objeto: {obj.texto}</li>
        <li>Array: {arr[0]}</li>
      </ul>
    </>
  );
};

export default MostrarProps;
