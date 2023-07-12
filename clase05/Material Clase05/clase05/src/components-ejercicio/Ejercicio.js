import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBarEjercicio from "./NavBarEjercicio";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import VistaWrapper from "./VistaWrapper";

const Inicio = VistaWrapper(Home);
const Nos = VistaWrapper(Nosotros);
const Contact = VistaWrapper(Contacto);

const Ejercicio = () => {
  return (
    <>
      <HashRouter>
        <NavBarEjercicio /> {/*Menú componente que contiene Nav/Link*/}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nos />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default Ejercicio;
