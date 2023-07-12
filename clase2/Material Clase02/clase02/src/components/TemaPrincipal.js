import React from "react";
import ImagenesEjemplo from "./ImagenesEjemplo";

const TemaPrincipal = ({ tema }) => {
  const { titulo, texto, images } = tema;

  return (
    <div className="section-title">
      <h2>{titulo}</h2>
      <p>{texto}</p>
      {images.length !== 0 && (
        <ImagenesEjemplo images={images} rows={images.length} />
      )}
    </div>
  );
};

export default TemaPrincipal;
