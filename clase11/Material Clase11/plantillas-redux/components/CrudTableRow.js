import React from "react";
import { deleteData } from "../actions/crudActions";
import { useDispatch } from "react-redux";

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
        <button className="btn btn-danger" onClick={() => dispatch()}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
