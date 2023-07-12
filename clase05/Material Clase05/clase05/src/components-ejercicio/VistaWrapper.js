import React from "react";
import "./VistaWrapper.css";
import SideBarEjercicio from "./SideBarEjercicio";

const VistaWrapper =
  (Componente) =>
  ({ ...props }) => {
    return (
      <>
        <SideBarEjercicio />
        <div className="main">
          <Componente {...props} />
        </div>
      </>
    );
  };

export default VistaWrapper;
