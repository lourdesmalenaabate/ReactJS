import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./index.css";
import App from "./App";
//import ContadorUseReducer from "./components-ejemplos-useReducer/ContadorUseReducer";
//import { DataProvider } from "./components-ejercicio/context/DataContext";
//import Ejercicio from "./components-ejercicio/Ejercicio";
//import { ShoppingProvider } from "./components-ejemplos-useReducer/context/ShoppingContext";
//import ShoppingCart from "./components-ejemplos-useReducer/ShoppingCart";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <ContadorUseReducer />
    <DataProvider>
      <Ejercicio />
    </DataProvider>*/}
    {/* <ShoppingProvider>
        <ShoppingCart />
      </ShoppingProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
