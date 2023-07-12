import React, { useContext, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import DataContext from "../context/DataContext";
import CrudTableRow from "./CrudTableRow";

const CrudTable = () => {
  const { data } = useFetch(
    "https://62633b22c430dc560d2cf4d6.mockapi.io/harryPotter"
  );
  const { db, getData } = useContext(DataContext);

  useEffect(() => {
    if (data) getData(data);
  }, [data]);

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
