import React from "react";
import { useRoutes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Admin from "./pages/Admin";

const Rutas = () => {
  let rutas = useRoutes([
    {
      path: "/",
      element: <Inicio />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/admin/:name",
      element: <Admin />,
    },
  ]);
  return rutas;
};

export default Rutas;
