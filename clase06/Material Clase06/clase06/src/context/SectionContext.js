import { createContext } from "react";

const SectionContext = createContext();
const temas = [
  {
    id: "react",
    titulo: "Hooks Navegación",
    texto:
      "Como alternativa al uso de Elementos JSX para la creación de nuestras rutas, React-router pone a disposición una serie de hooks que podemos utilizar. Tener presente que estos hooks son usados para gernerar rutas por lo que es necesario usarlo dentro del contexto de un manejador de rutas (BrowserRouter/HashRouter)",
    images: [],
    doc: "",
    secundarios: [
      {
        id: "useRoutes",
        titulo: "useRoutes",
        texto:
          "El Hook useRoute es el equivalente al Elemento <Route> y, por tanto, nos permite declarar las rutas de nuestra app.",
        images: [
          "assets/images/routeChildren.png",
          "assets/images/useRoutes.png",
        ],
        doc: "https://reactrouter.com/docs/en/v6/api#useroutes",
      },
      {
        id: "useNavigate",
        titulo: "useNavigate",
        texto:
          "El Hook useNavigate es el equivalente al Elemento <Navigate> y, por tanto, nos permite hacer redirecciones.",
        images: ["assets/images/useNavigate.png"],
        doc: "https://dev.to/salehmubashar/usenavigate-tutorial-react-js-aop",
      },
      {
        id: "useParams",
        titulo: "useParams",
        texto:
          "El Hook useParam nos permite hacer uso de los parámetros declarados en nuestras rutas",
        images: ["assets/images/useParams.png"],
        doc: "https://reactrouter.com/docs/en/v6/getting-started/overview#reading-url-parameters",
      },
    ],
  },
  {
    id: "hooks",
    titulo: "Hooks",
    texto:
      "Los Hooks son funciones de JavaScript, pero necesitas seguir dos reglas cuando los uses: ”Llama Hooks solo en el nivel superior” y ”Llama Hooks solo en funciones de React”. La primer regla asegura que los hooks se llamen en el mismo orden cada vez que un componente se renderiza; mientras que con la segunda aseguramos que toda la lógica del estado de un componente sea claramente visible desde tu código fuente. Al crear nuestras aplicaciones React mediante create-react-app agregamos un pluggin ESlint que nos ayuda a cumplir con estas reglas.",
    images: [],
    doc: "https://es.reactjs.org/docs/hooks-rules.html",
    secundarios: [
      {
        id: "hooks-personalizados",
        titulo: "Hooks Personalizados",
        texto:
          "Construir tus propios Hooks te permite extraer la lógica del componente en funciones reutilizables. Cuando queremos compartir lógica entre dos funciones de JavaScript, lo extraemos en una tercera función. Un Hook personalizado es una función de JavaScript cuyo nombre comienza con ”use” y que puede llamar a otros Hooks. Arrancar los nombres de nuestros hooks personalizados con ”use” asegura que el componente sea sometido a las reglas de hooks",
        images: ["assets/images/hookPersonalizado.png"],
        doc: "https://es.reactjs.org/docs/hooks-custom.html#gatsby-focus-wrapper",
      },
    ],
  },
  {
    id: "contextAPI",
    titulo: "API Context",
    texto:
      "En una aplicación típica de React, los datos se pasan de arriba hacia abajo (de padre a hijo) a través de props, pero esta forma puede resultar incómoda para ciertos tipos de props (por ejemplo, localización, el tema de la interfaz) que son necesarias para muchos componentes dentro de una aplicación. Context proporciona una forma de compartir valores como estos entre componentes sin tener que pasar explícitamente una prop a través de cada nivel del árbol. Context se usa principalmente cuando algunos datos tienen que ser accesibles por muchos componentes en diferentes niveles de anidamiento. Si sólo queremos evitar pasar algunos props a través de muchos niveles, la composición de componentes (crear un componente usando otros) suele ser una solución más simple que Context. Trabajar con Context implica la creación de dos elementos: ”Provider” y ”Consumer”",
    images: [],
    doc: "https://es.reactjs.org/docs/context.html#gatsby-focus-wrapper",
    secundarios: [
      {
        id: "provider",
        titulo: "Provider",
        texto:
          "El Provider es el Componente que contiene toda la información de estado del Contexto Actual. Dicho de otra forma, en un Provider vamos a poner toda la información que queremos este disponible(podemos pensar en el Provider como el 'Componente en que vive el Estado'). Para mantener organizado nuestro código y asegurar la reutilización de los Providers, desde la documentación oficial recomiendan armar un Contexto para cada tipo de información que necesitemos pasar (ej. un Provider con estilos y un Provider con manejo de Loggin)",
        images: ["assets/images/provider.png"],
        doc: "",
      },
      {
        id: "consumer",
        titulo: "Consumer",
        texto:
          "CUn Consumer es todo Componente que se encuentra envuelto por un Provider. Para acceder a los datos del objeto retornado por un Provider, es necesario que el Componente Consumer sea hijo del Provider y, en el Componente, importar el Provider.",
        images: ["assets/images/consumer1.png", "assets/images/consumer2.png"],
        doc: "",
      },
      {
        id: "providers",
        titulo: "Consumir más de un Provider",
        texto:
          "Teniendo en cuenta que se recomienda la creación de distintos Contexts para distintos tipos de datos es posible, entonces, que un Componente pueda consumir más de un Provider. Es importante tener presente que, en estos casos, de haber algún tipo de dato repetido siempre se va a aplicar el dato que corresponda al Provider más cercano",
        images: ["assets/images/consumer3.png", "assets/images/consumer4.png"],
        doc: "",
      },
    ],
  },
  {
    id: "ejercicio",
    titulo: "Ejercicio",
    texto:
      "Para prácticar Context vamos a realizar el CRUD de la clase cuatro aplicando este nuevo conceptos",
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
