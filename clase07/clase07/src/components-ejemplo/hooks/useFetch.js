import { useState, useEffect } from "react";

//Creación del Hook
export const useFetch = (url) => {
  //Creación de variables de estado para el manejo de Fetch
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //Manejo de errores de conexión con el Objeto AborController
    const abortController = new AbortController();
    const signal = abortController.signal;

    //Función asíncrona que maneja el fetch
    const fetchData = async () => {
      setLoading(true); //Mostrar loader
      try {
        const res = await fetch(url, { signal });
        //Lanzamos error en caso de falla en la llamada
        if (!res.ok) {
          let err = new Error("Error en la petición Fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrió un error";
          throw err;
        }
        const json = await res.json();
        //Actualización de estado cuando no hay error de conexión
        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          //Manejo de error de llamada
          setData(null);
          setError(error);
        }
      } finally {
        //Siempre cambiar visualización de loader
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    //Cierre de conexión en fase de desmontaje (limpieza)
    return () => abortController.abort();
  }, [url]);

  //Retorno de objeto con los datos de la llamada
  return { data, error, loading };
};
