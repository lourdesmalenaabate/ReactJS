import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //Ejecutar el fetch cuando el Componente se monta y/o cambia la url
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    (async () => {
      setLoading(true);

      try {
        const res = await fetch(url, { signal });

        if (!res.ok) {
          let err = new Error("Error en la petición Fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrió un error";
          throw err;
        }

        const json = await res.json();

        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    })();

    return () => abortController.abort();
  }, [url]);

  return { data, error, loading };
};
