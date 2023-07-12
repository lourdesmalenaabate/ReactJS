import React, { useState } from "react";

const initialState = {
   texto: "",
}

const Formulario = ({ handleSubmit }) => {
  const [form, setForm] = useState(initialState);
  const handleChange = (e) => {
    setForm({
      ...form, //crea una copia del objeto almacenado en el state
      [e.target.name]: e.target.value,
      //[e.target.name] - permite la modificación dinámica de los valores del formurio
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, form.texto)}>
      <label htmlFor="texto">
        Ingrese Texto:
        <br />
        <input
          type="text"
          name="texto"
          id="texto"
          value={form.texto} //Almacena el value en la clave correspondiente
          onChange={handleChange}
        />
      </label>
      <input className="btn-enviar" type="submit" value="Enviar" />
    </form>
  );
};

export default Formulario;
