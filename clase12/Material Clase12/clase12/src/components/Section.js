import React, { useContext } from "react";
import SectionContext from "../context/SectionContext";
import Boton from "./Boton";
import "./Section.css";
import TemaPrincipal from "./TemaPrincipal";
import TemasSecundarios from "./TemasSecundarios";

const Section = ({ id, i }) => {
  const { temas } = useContext(SectionContext);

  return (
    <section id={`${id}`} className="about">
      <div className="container">
        <TemaPrincipal tema={temas[i]} />
        <TemasSecundarios temas={temas[i].secundarios} />
        {temas[i].doc && (
          <Boton
            texto={temas[i].titulo}
            clases="principal"
            ruta={temas[i].doc}
          />
        )}
      </div>
    </section>
  );
};

export default Section;
