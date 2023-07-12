import React, { useState } from "react";

const initialState = {};

//props destructuradas
const Hijo2 = ({ texto, setInput }) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(form.texto);
    setForm(initialState);
  };

  return (
    <>
      <h2>Hijo 2</h2>
      <p>{texto}</p>
      <h3>Formulario Controlado</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="texto">Ingrese Texto:</label>
        <br />
        <input
          type="text"
          name="texto"
          id="texto"
          value={form.value}
          onChange={handleChange}
        />
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default Hijo2;
