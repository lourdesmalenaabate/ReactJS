//Creamos un Módulo para trabajar con nuestras llamadas API de forma estandarizada
export const helpHttp = () => {
  //Función que se encarga de configurar .fetch
  const customFetch = (endpoint, options) => {
    //header por deafault en caso de que no se pase
    const defaultHeader = {
      accept: "application/json",
    };

    //Manejo de errores de conexión con el Objeto AborController
    const controller = new AbortController();
    options.signal = controller.signal;

    //Configuración de la llamada
    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    //Configurar tiempo de espera antes de abortar la conexión
    setTimeout(() => controller.abort(), 3000);

    //Retorno de la Promesa con manejo de error en Promesa
    return fetch(endpoint, options).then((res) =>
      res.ok
        ? res.json()
        : Promise.reject({
            err: true,
            status: res.status || "00",
            statusText: res.statusText || "Ocurrió un error",
          })
    );
  };

  //Función que maneja el verbo GET
  const get = (url, options = {}) => customFetch(url, options);

  //Función que maneja el verbo POST
  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  //Función que maneja el verbo PUT
  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  //Función que maneja el verbo DELETE
  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  //Retorno de las funciones que manejan los verbos AJAX
  return {
    get,
    post,
    put,
    del,
  };
};
