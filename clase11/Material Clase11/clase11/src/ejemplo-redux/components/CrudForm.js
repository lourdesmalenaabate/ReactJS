import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createData, updateData } from "../actions/crudActions";

const initailForm = {
  name: "",
  house: "",
  id: null,
};

const CrudForm = ({ dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
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

    if (form.id === null) {
      dispatch(createData(form));
    } else {
      dispatch(updateData(form));
    }

    handleReset();
  };

  const handleReset = (e) => {
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
