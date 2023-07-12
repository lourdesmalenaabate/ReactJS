import React from "react";
import Padre from "./Padre";

const Eventos = () => {
  const handleClick = (e) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
  };

  const saludar = (saludo) => console.log(saludo);

  return (
    <>
      <ul>
        <li>Nativos - Eventos de los navegadores</li>
        <li>
          Sintéticos - Implementación que hace React de los Eventos Nativos para
          que todos los eventos funciones igual sin importar el Navegador
        </li>
        <li>
          Personalizados - La pobilidad de que la función callback del evento
          maneje argumentos que no sean el Objeto Evento
        </li>
      </ul>
      <h3>Evento Sintétido</h3>
      <button onClick={handleClick}>Hace Click</button>
      <h3>Evento Personalizado</h3>
      <button
        onClick={() => {
          saludar("Hola");
        }}>
        Saludar
      </button>
      <Padre />
    </>
  );
};

export default Eventos;
