import React, { useState, useEffect, useContext } from "react";
import DataContext from "./context/DataContext";

const initailForm = {
  name: "",
  house: "",
  id: null,
};

const CrudForm = () => {
  const { dataToEdit, createData, updateData, setDataToEdit } =
    useContext(DataContext);
  const [form, setForm] = useState(initailForm); //Estado inicial del formulario para trabajar con un "Formulario Controlado"

  useEffect(() => {
    //Validación de Estado para saber si queremos editar o agregar
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  //Cambio de Estado en el evento change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //Manejo del evento submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validaciones

    //Datos incompletos
    if (!form.name || !form.house) {
      alert("Datos incompletos");
      return;
    }

    //Crear o Editar
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    //Reseteo de los datos del Estado
    handleReset();
  };

  const handleReset = () => {
    setForm(initailForm);
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
          onChange={handleChange}
          value={form.name}
          className="me-4 row mb-3"
        />
        <input
          type="text"
          name="house"
          placeholder="Casa"
          onChange={handleChange}
          value={form.house}
          className="me-4 row mb-3"
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
