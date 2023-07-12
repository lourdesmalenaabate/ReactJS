//npx create-react-app my-app --template typescript
//Dependencias: bootswatch react-icons

/*
  https://github.com/DefinitelyTyped/DefinitelyTyped - Biblioteca de Interfaces
  Cuando trabajamos con TypeScript debemos asegurarnos que las dependecias que incorporamos
  tengan soporte para los tipos de datos (interces) o crearlas nosotros.
  Para ayudarnos con la creación manual existen bibliotecas que recopilan interfaces para
  las dependecias más populares
*/

import React from "react";
import ReactDOM from "react-dom";
//https://bootswatch.com/
import "bootswatch/dist/journal/bootstrap.min.css";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App title="Lista de Tareas" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
