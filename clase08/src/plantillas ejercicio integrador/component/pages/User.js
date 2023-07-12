import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import CrudTable from "../CrudTable";

//Componente Privado, sólo accesible para usuario logueados
const User = () => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      {!auth ? (
        <Navigate to="/" />
      ) : (
        <>
          <h2>Bienvenid@ {auth.userName}</h2>
          <CrudTable showButtons={false} />
        </>
      )}
    </>
  );
};

export default User;
