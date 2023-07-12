import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import RutasContext from "../context/RutasContext";

const RutaPrivada = () => {
  const { user } = useContext(RutasContext);
  return (
    <div className="p-2">
      <h2>Ruta Privada</h2>
      {!user && <Navigate to="/" />}
    </div>
  );
};

export default RutaPrivada;
