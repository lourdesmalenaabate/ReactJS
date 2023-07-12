import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";

const Inicio = () => {
  const navigate = useNavigate();

  const handleClick = (ruta) => navigate(ruta);

  return (
    <>
      <h1>Ejemplo Rutas</h1>
      <NavBar />
      <br />
      <button onClick={() => handleClick("/admin")}>Admin</button>
      <br />
      <button onClick={() => handleClick("/admin/Pepe")}>Pepe</button>
    </>
  );
};

export default Inicio;
