import React, { useState, useEffect, useContext } from "react";
import DataContext from "../context/DataContext";

const initialForm = {
  name: "",
  house: "",
  id: null,
};

const CrudForm = () => {
  const { dataToEdit, setDataToEdit, createData, updateData } =
    useContext(DataContext);
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) setForm(dataToEdit);
    else setForm(initialForm);
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.house) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) createData(form);
    else updateData(form);

    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div className="mb-4">
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form className="p-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className="me-4 row mb-3"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="house"
          placeholder="Casa"
          className="me-4 row mb-3"
          value={form.house}
          onChange={handleChange}
        />
        <input type="submit" value="Enviar" className="me-2 btn btn-success" />
        <input
          type="reset"
          value="Limpiar"
          className="btn btn-danger"
          onClick={handleReset}
        />
      </form>
    </div>
  );
};

export default CrudForm;
