import { createContext } from "react";

const SectionContext = createContext();
const temas = [
  {
    id: "composición",
    titulo: "Composición",
    texto:
      "Hasta ahora estuvimos aplicando el concepto de crear Componentes pequeños que sean parte de Componentes más grande. Esto se conoce como Composición de Componentes. El nombre viene de la Programación Funcional donde existe la técnica Composición de Funciones. La idea es que uses funciones, o en nuestro caso componentes, más pequeños y simples para crear funciones/componentes más complejos. Debido a que la Composición de Componentes es un concepto fundante de React, la propia documentación oficial ofrece un artículo en el cuál detalla los beneficios del uso de la Composición en oposición a la Herencia (recordemos que en React podemos trabajar con Componentes de Clases). Uno de los elementos que destacan en ese artículo es la existencia de un tipo de prop especial pensada para el trabajo con Composición: 'La prop children'. La prop children nos permite acceder a los elementos hijos de un Componente Padre lo que, en definitiva, puede resultar en que el mismo Componente Padre renderice cosas distintas dependiendo de los Elementos/Componentes Hijo que le declaremos",
    images: ["assets/images/composicion.png"],
    doc: "https://es.reactjs.org/docs/composition-vs-inheritance.html#gatsby-focus-wrapper",
    secundarios: [],
  },
  {
    id: "hoc",
    titulo: "Higher Order Component",
    texto:
      "Un componente de orden superior (HOC por las siglas en inglés de higher-order component) es una técnica avanzada en React para el reuso de la lógica de componentes. Los HOCs no son parte de la API de React. Son un patrón que surge de la naturaleza composicional de React. En concreto, un componente de orden superior es una función que recibe un componente y devuelve un nuevo componente. Mientras que un componente transforma props en interfaz de usuario, un componente de orden superior transforma un componente en otro. Un caso en el que trabajar con HOC's puede ser muy util es al crear SPA. Un HOC nos permitiría tener una misma vista que cambie según el Componente que le pasamos",
    images: [
      "assets/images/hoc1.png",
      "assets/images/hoc2.png",
      "assets/images/hoc3.png",
    ],
    doc: "https://es.reactjs.org/docs/higher-order-components.html#gatsby-focus-wrapper",
    secundarios: [],
  },
  {
    id: "react-router",
    titulo: "Manejo de Rutas",
    texto:
      "Como sabemos React es una librería y todos los elementos que hoy en día nos permiten que lo usemos como Framework son externos a la líbrería en sí. Uno de esos elementos es el que nos permite manejar las rutas en nuestras app: 'React-router'. Para empezar a trabajar con este módulo es necesario agregarlo como dependencia de proyecto haciendo la instalación del paquete mediante npm (npm install react-router-dom). El trabajo con react-router se divide en dos partes, por un lado necesitamos que la app conoszca las rutas que vamos a estar utilizando para lo cual debemos importar el Componente que maneja las rutas (BrowserRouter/HashRouter), el Componente Routes para lograr que cambien y el Componente Route para la creación de la ruta; y por el otro, tenemos que usar la ruta para lo que necesitamos el Componente Link o el Componente NavLink (la única diferencia entre estos es que a NavLink le podemos agregar una prop especial para manejar el elemento activo)",
    images: [],
    doc: "https://reactrouter.com/docs/en/v6",
    secundarios: [
      {
        id: "browserRouter",
        titulo: "BrowserRouter",
        texto:
          "Si las rutas que queremos manejar tienen un fallback en el back-end (recordemos que una url en internet implica acceder a información disponible en un servidor. El fallback es la respuesta que se desata cuando accedemos desde el front a datos en el back), entonces necesitamos el Componente BrowserRouter. Dentro de este Componente debemos poner el Componente que manejará la redirección usando el Componente Link/NavLink",
        images: ["assets/images/browser.png"],
        doc: "",
      },
      {
        id: "hashRouter",
        titulo: "HashRouter",
        texto:
          "Para los casos en que las rutas no tengan un soporte en back-end utilizamos el HashRouter. Dentro de este Componente debemos poner el Componente que manejará la redirección usando el Componente Link/NavLink",
        images: ["assets/images/hash.png"],
        doc: "",
      },
      {
        id: "routes",
        titulo: "Routes",
        texto:
          "El Componente Routes es el encargado de generar el cambio de vistas según corresponda para cada ruta declarada. Utilizarlo es tan simple como convertirlo en el Componente padre de los distintos Componentes Route (las rutas)",
        images: ["assets/images/routes.png"],
        doc: "",
      },
      {
        id: "route",
        titulo: "Route",
        texto:
          "El Componente Route es el responsable de crear la ruta y, por tanto, el que más configuraciones recibe. El Componente Route puede recibir varias props para configurar una ruta pero las únicas props indispensables son path (ruta que queremos crear) y element (componente que se renderizará en la ruta creada). A partir de la versión 6, las rutas declaradas en route son analizadas de forma exacta. En versiones anteriores era neceario agregar el parámetro exact para que se analizara la ruta de forma exacta",
        images: ["assets/images/route.png"],
        doc: "",
      },
      {
        id: "navigate",
        titulo: "Navigate",
        texto:
          "Navigate nos permite generar una redirección. Esto, combinado al renderizado condicional, puede ayudarnos acrear vistas privadas sólo accesibles a usuarios logueados",
        images: ["assets/images/private.png"],
        doc: "",
      },
      {
        id: "link",
        titulo: "Link/NavLink",
        texto:
          "El Componente que nos permite utilizar las rutas es el Link(o NavLink). Este es el Componente que realiza la redirección (equivale a un elemento 'a' de HTML) para lo que necesitamos utilizar la prop 'to'. Si utilizamos NavLink vamos a poder agregar la prop 'activeClassName' para pasar estilos CSS para el elemento activo.",
        images: ["assets/images/link.png", "assets/images/navlink.png"],
        doc: "",
      },
    ],
  },
  {
    id: "ejercicio",
    titulo: "Ejercicio",
    texto:
      "Para prácticar todo los visto en esta clase vamos a crear una SPA creando los componentes mendiante el patrón Higher Order Component",
    images: [],
    doc: "",
    secundarios: [],
  },
];

const SectionProvider = ({ children }) => {
  const data = { temas };
  return (
    <SectionContext.Provider value={data}>{children}</SectionContext.Provider>
  );
};

export { SectionProvider };
export default SectionContext;
