import React from "react";
import { useDispatch } from "react-redux";
import { deleteData } from "../features/crud/crudSlice";

const CrudTableRow = ({ el, setDataToEdit }) => {
  const dispatch = useDispatch();
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
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteData(id))}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
