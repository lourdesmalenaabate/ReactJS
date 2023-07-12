import React from "react";
import ImagenesEjemplo from "./ImagenesEjemplo";
import TemaSecundario from "./TemaSecundario";
import Boton from "./Boton";

const TemasSecundarios = ({ temas }) => {
  return (
    temas &&
    temas.map((el, i) => (
      <div key={`${el.id}-${i}`} className="row content mb-5 ">
        <TemaSecundario titulo={el.titulo} texto={el.texto} />
        {el.images !== 0 && (
          <ImagenesEjemplo
            id={el.id}
            images={el.images}
            rows={el.images.length}
          />
        )}
        {el.doc && (
          <Boton
            ruta={el.doc}
            clases="btn-learn-more"
            texto={`Más sobre ${el.titulo}`}
          />
        )}
      </div>
    ))
  );
};

export default TemasSecundarios;
