import React, { useReducer } from "react";
import { TYPES } from "./actions/contadorActions";
import { contadorReducer, initialState } from "./reducers/contadorReducer";

const ContadorUseReducer = () => {
  const [state, dispatch] = useReducer(contadorReducer, initialState);
  const { contador } = state;

  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET });
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

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
      <h3>{contador}</h3>
    </div>
  );
};

export default ContadorUseReducer;
