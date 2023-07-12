import React from "react";
import { useParams } from "react-router-dom";

const Admin = () => {
  const { name } = useParams();

  return (
    <>
      <h2>Hola {name}</h2>
    </>
  );
};

export default Admin;
