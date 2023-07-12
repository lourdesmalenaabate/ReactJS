import React, { useState } from "react";
import Hijo1 from "./Hijo1";
import Hijo2 from "./Hijo2";

const LiftingState = () => {
  const [texto, setTexto] = useState("Un Texto");
  const otroTexto = "Otro texto";
  const [input, setInput] = useState(null);
  return (
    <>
      <h2>Lifting State Up</h2>
      <Hijo1 otroTexto={otroTexto} setTexto={setTexto} input={input} />
      <Hijo2 texto={texto} setInput={setInput} />
    </>
  );
};

export default LiftingState;
