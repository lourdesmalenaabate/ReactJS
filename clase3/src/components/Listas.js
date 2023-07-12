import React from "react";

const Listas = () => {
  const arr = [1, 2, 3];
  return (
    <>
      <h3>Listas</h3>
      <ul>
        {arr.map((num, i) => (
          <li
            key={`lista1-${i}`}>{`Soy el ${num}. Valor de key: lista1-${i}`}</li>
        ))}
      </ul>
      <ul>
        {arr.map((num, i) => (
          <li
            key={`lista2-${i}`}>{`Soy el ${num}. Valor de key: lista2-${i}`}</li>
        ))}
      </ul>
    </>
  );
};

export default Listas;
