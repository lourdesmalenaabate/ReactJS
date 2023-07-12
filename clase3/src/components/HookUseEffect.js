import React, { useEffect, useState } from "react";

const Reloj = ({ hora }) => {
  return <h3>{hora}</h3>;
};

const HookUseEffect = () => {
  const [hora, setHora] = useState(null);
  const [visible, setVisible] = useState(false);
  let temporizador;

  useEffect(() => {
    //1. Cuando ya está el Componente en DOM
    console.log("Componente en DOM/Cambio");
    return () => {
      //3. Cuando el Componente se va a desmontar
      //No es obligatorio escribirlo, pero siempre se ejecuta
      //Conviene escribirlo para eliminar elementos que quedan en la memoria
    };
  }, []);
  /*
    [] => Array de dependencias. Indica cuando queremos ejecutar el efecto
        => Vacío, implica que sólo queremos que se ejecute cuando el Componente se incorpora al DOM por primera vez
        => Agregar valores, implica que se ejecute cuando cambie el valor declarado 
        => Si no lo agregamos, se ejecuta siempre - NO SE RECOMIENDA
  */

  const tictac = () => {
    temporizador = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
  };

  const iniciar = () => {
    tictac();
    setVisible(true);
  };

  const detener = () => {
    setVisible(false);
  };

  return (
    <>
      <h2>Hook useEffect</h2>
      {visible && <Reloj hora={hora} />}
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={detener} temporizador={temporizador}>
        Detener
      </button>
    </>
  );
};

export default HookUseEffect;
