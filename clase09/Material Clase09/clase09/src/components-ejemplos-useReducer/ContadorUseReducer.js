import React, { useReducer } from "react";
import { TYPES } from "./actions/contadorActions";
import {
  contadorInit,
  contadorInitialState,
  contadorReducer,
} from "./reducers/contadorReducer";

const ContadorUseReducer = () => {
  /*
    useReducer 
      => Retorna -> El valor actual del state y una función dispatch usada para modificarlo
      => Recibe
          -> 1ro - Función reductora que maneja el cambio del state
          -> 2do - Objeto State inicial
          -> 3ro (opcional) - Función creadora de un State inicial en diferido que permite crear un nuevo Objeto State añadiendo o Modificando valores (no muy utilizada)
  */
  const [state, dispatch] = useReducer(
    contadorReducer,
    contadorInitialState,
    contadorInit
  );

  //Callbacks de Evento que ejecutan la función dispatch y envian la accion y el payload
  const sumar = () => dispatch({ type: TYPES.INCREMENT });

  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });

  const restar = () => dispatch({ type: TYPES.DECREMENT });

  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Mejorado Reducer</h2>
      <nav>
        <button onClick={sumar5}>+5</button>
        <button onClick={sumar}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={restar}>-</button>
        <button onClick={restar5}>-5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default ContadorUseReducer;
