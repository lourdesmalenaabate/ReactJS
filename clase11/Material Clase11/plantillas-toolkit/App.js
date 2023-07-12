//Dependencias necesarias: react-redux @reduxjs/toolkit (incluye redux, immer, redux-thunk, reselect)

import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}
export default App;
