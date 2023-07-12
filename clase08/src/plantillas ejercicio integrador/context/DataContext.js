import { createContext, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
const ajax = helpHttp();
const url = "https://62633b22c430dc560d2cf4d6.mockapi.io/harryPotter";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [db, setDb] = useState([]);
  const [error, setError] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);

  const getData = () => {
    ajax.get(url).then((res) => {
      if (!res.err) {
        setError(null);
        setDb(res);
      } else {
        setDb([]);
        setError(res);
      }
    });
  };

  const createData = (data) => {
    const options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    ajax.post(url, options).then((res) => {
      if (!res.err) {
        setDb([...db, res]);
        setError(null);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    const endpoint = `${url}/${data.id}`;
    const options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    ajax.put(endpoint, options).then((res) => {
      if (!res.err) {
        const newDb = db.map((el) => (el.id === data.id ? data : el));
        setDb(newDb);
        setError(null);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    const isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      const endpoint = `${url}/${id}`;
      const options = {
        headers: { "content-type": "application/json" },
      };

      ajax.del(endpoint, options).then((res) => {
        if (!res.err) {
          const newDb = db.filter((el) => el.id !== id);
          setDb(newDb);
          setError(null);
        } else {
          setError(error);
        }
      });
    } else {
      return;
    }
  };

  const data = {
    db,
    error,
    dataToEdit,
    setDataToEdit,
    getData,
    createData,
    updateData,
    deleteData,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataProvider };
export default DataContext;
