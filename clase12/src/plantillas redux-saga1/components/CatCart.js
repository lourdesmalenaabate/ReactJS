import React from "react";

const CatCart = ({ name, image, temperament, description }) => {
  return (
    <div className="Gallery">
      <div className="row">
        <div className="column column-left">
          <img src={image.url} alt={name} width="200px" />
        </div>
        <div className="column column-right">
          <h2>{name}</h2>
          <h5>Temperament: {temperament}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CatCart;
