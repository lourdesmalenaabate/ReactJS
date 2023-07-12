//Para armar la navegación hay que agregar react-router-dom como dependencia del proyecto
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import ViewWrapper from "./ViewWrapper";

//Páginas creadas con el patrón de diseño Higher Order Component
const Inicio = ViewWrapper(Home);
const Administrador = ViewWrapper(Admin);

const EjemploNagevacion = () => {
  /*
        Ruta con BrowserRouter => http://localhost:3000/ (requiere fallback del servidor)
        Ruta con HasBrowser => http://localhost:3000/#/ (No requiere fallback)
    */
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/admin" element={<Administrador />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default EjemploNagevacion;
