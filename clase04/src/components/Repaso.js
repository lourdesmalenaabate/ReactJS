import React, { useEffect, useState } from "react";
import "./Repaso.css";
import Boton from "./Boton";
import Lista from "./Lista";

const initialState = ["Elemento 1", "Elemento 2", "Elemento 3"];

const Repaso = () => {
  const [mostrar, setMostrar] = useState(false);
  const [lista, setLista] = useState(initialState);
  const [bg, setBg] = useState("crimson");

  const handleStateChange = () => {
    setMostrar(!mostrar);
    mostrar ? setLista(initialState) : setLista([]);
  };

  const handleClick1 = () => setBg("cornflowerblue");

  const styles = {
    backgroundColor: bg,
  };

  /* useEffect(() => {
    mostrar
      ? setLista(["Elemento 1", "Elemento 2", "Elemento 3"])
      : setLista(initialState);
  }, [mostrar]); */

  return (
    <div style={styles}>
      <h2>Repaso de Conceptos</h2>
      <Lista lista={lista} />
      <Boton
        setMostrar={setMostrar}
        mostrar={mostrar}
        handleStateChange={handleStateChange}
      />
      <Boton handleClick1={handleClick1} texto={"Cambiar Background"} />
    </div>
  );
};

export default Repaso;
