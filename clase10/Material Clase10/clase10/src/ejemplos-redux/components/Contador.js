import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  reset,
  restar,
  restar5,
  sumar,
  sumar5,
} from "../actions/contadorActions";

const Contador = () => {
  const store = useSelector((store) => store);
  const { contador } = store;
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Contador Redux</h2>
      <nav>
        <button onClick={() => dispatch(sumar5(5))}>+5</button>
        <button onClick={() => dispatch(sumar())}>+1</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(restar())}>-1</button>
        <button onClick={() => dispatch(restar5(5))}>-5</button>
      </nav>
      <h3>{store.contador}</h3>
      <h3>{contador}</h3>
    </div>
  );
};

export default Contador;
