import React, { useEffect, useState } from "react";

const Reloj = ({ visible }) => {
  const [hora, setHora] = useState(null);

  useEffect(() => {
    //1. Cuando ya está en el DOM (componentDidMount)
    const temporizador = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 100);

    return () => {
      //3. Cuando el Componente se desmonta (componentWillUnmount)
      //El return siempre se ejecuta aunque no lo escribamos
      clearInterval(temporizador);
    };
  }, [visible]);
  /*
      [] => Array de dependencias
          => No es obligatorio. No ponerlo implica que el efecto se ejecuta todas y cada una de las veces que se monta el componente
          => Vacío implica que sólo se ejecuta el efecto la PRIMERA VEZ que se monta el componente
          => Agregar una dependencia implica que el efecto que se ejecuta cada vez que cambia el valor almacenado en la dependencia. Todo efecto se ejecuta la primera vez que se monta el Componente
    */

  return <h3>{hora}</h3>;
};

const HookUseEffect = () => {
  const [visible, setVisible] = useState(false);

  const iniciar = () => setVisible(true);

  const detener = () => setVisible(false);

  return (
    <>
      <h2>Hook useEffect</h2>
      {visible && <Reloj visible={visible} />}
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={detener}>Detener</button>
    </>
  );
};

export default HookUseEffect;
