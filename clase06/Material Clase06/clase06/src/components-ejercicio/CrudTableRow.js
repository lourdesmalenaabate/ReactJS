import React, { useContext } from "react";
import DataContext from "../context-ejercicio/DataContext";

const CrudTableRow = ({ el }) => {
  const { setDataToEdit, deleteData } = useContext(DataContext);
  let { name, house, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{house}</td>
      <td>
        <button
          className="btn btn-warning me-3"
          onClick={() => setDataToEdit(el)}>
          Editar
        </button>
        <button className="btn btn-danger" onClick={() => deleteData(id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
