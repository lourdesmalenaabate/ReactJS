import React, { useContext } from "react";
import DataContext from "../context-ejercicio/DataContext";
import CrudTableRow from "./CrudTableRow";

const CrudTable = () => {
  const { db } = useContext(DataContext);
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
            db.map((el) => <CrudTableRow key={el.id} el={el} />)
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
