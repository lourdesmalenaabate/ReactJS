import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import CrudForm from "../CrudForm";
import CrudTable from "../CrudTable";

//Componente privado, sólo accesible para usuario logueados
const Admin = () => {
  const { auth } = useContext(AuthContext);

  return (
    <>
      {!auth ? (
        <Navigate to="/" />
      ) : (
        <>
          <h2>Bienvenid@ {auth.userName}</h2>
          <CrudForm />
          <CrudTable showButtons={true} />
        </>
      )}
    </>
  );
};

export default Admin;
