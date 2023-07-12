import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import RutasContext from "../context/RutasContext";

const Inicio = () => {
  const { setUser } = useContext(RutasContext);
  const [mostrar, setMostrar] = useState(true);
  const [irA, setIrA] = useState(false);
  //Incorporar Hook useNavigate
  const navigate = useNavigate();

  //Re-dirección con Hook useNavigate
  const llevarA = (ruta) => navigate(ruta);

  const userExiste = (ruta) => {
    setUser(true);
    navigate(ruta);
  };

  return (
    <div className="p-2">
      <h1>Repaso Rutas Privadas</h1>
      <h2>Inicio</h2>
      {mostrar && <p>Muestro este p, porque en el state mostrar hay un true</p>}
      <button onClick={() => llevarA("/privada")}>
        Ir a la ruta "/privada"
      </button>
      <br />
      <br />
      {irA && <Navigate to="/privada" />}
      <button onClick={() => setIrA(true)}>Ir a la ruta "/privada"</button>
      <br />
      <br />
      <button onClick={() => userExiste("/privada")}>
        Ir a ruta "/privada" con user logueado
      </button>
    </div>
  );
};

export default Inicio;
