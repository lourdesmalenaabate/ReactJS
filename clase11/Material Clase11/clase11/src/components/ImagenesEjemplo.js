import React from "react";
import "./ImagenesEjemplo.css";

const ImagenesEjemplo = ({ images, id }) => {
  return (
    <div className="container">
      <div className={`row row-cols-1 max`}>
        {images.map((el, i) => (
          <div key={`img-${id}${i}`} className="col mb-3">
            <img src={el} alt="" className="img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagenesEjemplo;
