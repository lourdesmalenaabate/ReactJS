import React from "react";
import Hijo from "./Hijo";

const Padre = () => {
  return (
    <div>
      <h2>Padre</h2>
      <Hijo numero={1} />
      <Hijo numero="1" />
    </div>
  );
};

export default Padre;
