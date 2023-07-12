import React from "react";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import VistaWrapper from "./VistaWrapper";
import NavBar from "./components/NavBar";
import { HashRouter, Route, Routes } from "react-router-dom";

const Inicio = VistaWrapper(Home);
const Nos = VistaWrapper(Nosotros);
const Contact = VistaWrapper(Contacto);

const Ejercicio = () => {
  return (
    <>
      <HashRouter>
        <NavBar />
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
