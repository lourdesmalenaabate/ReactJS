import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../actions/crudActions";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ setDataToEdit }) => {
  const { db } = useSelector((store) => store.crud);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Casa</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {db.length > 0 ? (
            db.map((el) => (
              <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
