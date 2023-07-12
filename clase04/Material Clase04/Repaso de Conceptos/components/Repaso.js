import React, { useState, useEffect } from "react";
import Boton from "./Boton";
import Lista from "./Lista";

const initialList = [];

const Repaso = () => {
  const [mostrar, setMostrar] = useState(false);
  const [lista, setLista] = useState(initialList);

  useEffect(() => {
    //Montaje-Actualización
    mostrar
      ? setLista(["Elemento 1", "Elemento 2", "Elemento 3"])
      : setLista(initialList);
    /* 
    return () => {
        //Desmontaje (Se ejecuta todo el tiempo de forma implícita)
      } 
    */
  }, [mostrar]);

  return (
    <>
      <h2>Repaso de Conceptos</h2>
      <Lista lista={lista} />
      <Boton setMostrar={setMostrar} mostrar={mostrar} />
    </>
  );
};

export default Repaso;
