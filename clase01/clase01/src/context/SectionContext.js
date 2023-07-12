import { createContext } from "react";

const SectionContext = createContext();
const temas = [
  {
    id: "react",
    titulo: "ReactJS",
    texto:
      "ReactJS es una librería Open-Source de JavaScript, creada y mantenia por Facebook, pensada para trabajar con las vistas (en el modelo MVC) de las aplicaciones. Si bien hoy en día el uso que se hace de React puede generar confusión en cuanto a la definición, es importante entender que todos los componentes que nos permiten trabajar con React como si fuera un Framework (Node.js, Create-React-App, React-Router) son agregados externos a la funcionalidad de la librería por lo que, a diferencia de lo que sucede con Frameworks como puede ser Angular, es posible la incorporación de React en proyectos de HTML.",
    images: [],
    doc: "",
    secundarios: [
      {
        id: "componentes",
        titulo: "Componentes",
        texto:
          "Un Componente es el elemento mínimo de renderizado en React, esto siginifica que todo la visualización que se genere se hará a travéz de un Componenete. Existen dos tipos de componenetes: Los Componentes de Clase y Los Componentes Funcionales. Los Componentes de Clase son los únicos que pueden tener Estado",
        images: [
          "assets/images/componenteClase.png",
          "assets/images/componenteFuncional1.png",
          "assets/images/componenteFuncional2.png",
        ],
        doc: "",
      },
      {
        id: "virtualDom",
        titulo: "Virtual DOM",
        texto:
          " El desempeño (velocidad de aplicación) de React es muy alto, gracias a su funcionamiento. Esto se consigue por medio del DOM Virtual. El DOM Virtual está cargado en memoria y gracias a la herramienta de diferenciación se actualiza el DOM Real sólo en aquellos casos en que sea necesario.  El resultado es que estas operaciones permiten actualizaciones rápidas que producen aplicaciones fluidas con movimientos suavizados.",
        images: ["assets/images/virtualDOM.gif"],
        doc: "https://es.reactjs.org/docs/faq-internals.html#gatsby-focus-wrapper",
      },
      {
        id: "jsx",
        titulo: "JSX",
        texto:
          "ReactJS no retorna HTML. El código embebido dentro de Javascript parece HTML pero realmente es JSX. Son como funciones Javascript pero expresadas mediante una sintaxis propia de React llamada JSX y lo que produce son elementos en memoria y no elementos del DOM tradicional con lo cual las funciones no ocupan tiempo en producir pesados objetos del navegador sino simplemente elementos de un DOM virtual. Todo esto, como hemos dicho, es mucho más rápido. React DOM y la herramienta de diffing, se encargarán más tarde de convertir esos elementos devueltos por JSX en DOM Real, sin que nosotros tengamos que intervenir.",
        images: ["assets/images/jsx.png"],
        doc: "",
      },
      {
        id: "devTools",
        titulo: "React Dev Tools",
        texto:
          "Las React Dev Tools son una extensión que se les puede instalar a los navegadores como Firefox o Chrome que nos can a otorgar información exclusiva de los distintos componentes que vayamos creando en React.",
        images: [""],
        doc: "",
      },
    ],
  },
  {
    id: "creandoProyecto",
    titulo: "Creando Proyecto",
    texto:
      "Como ya se dijo, hoy en día React se utiliza como caulquier otro Framework de JS y por lo tanto, es necesario configurar un entorno de trabajo adecuado para lo cual nos apoyaremos en tres tecnologías: Node.js (motor JS), Babel (transpilador) y Webpack (compilador).",
    images: [],
    doc: "",
    secundarios: [
      {
        id: "node",
        titulo: "Node.js",
        texto:
          "El trabajo con Node.js nos abre la puerta al mundo del back-end porque, al estar pensado para el trabajo con servidores, podemos configurar nuestros propios servidores y conexiones con bases de datos. Pero esto no es todo, Node.js es también una excelente herramienta para el desarrollo front-end porque nos permite separar nuestros proyectos en dos grandes estructuras conocidas como 'Desarrollo' y 'Producción'. El código de 'Desarrollo' es el código con el que vamos a estar trabajando constantemente, mientras que el código de 'Producción' es el resultado final, el trabajo terminado. La gran diferencia entre estas estructuras es que el códgio de 'Producción' se crea como resultado de una serie de procesos aplicados al código de 'Desarrollo' pensados para mejorar la performance e integración del mismo.",
        images: [],
        doc: "https://nodejs.org/es/docs/",
      },

      {
        id: "modulos",
        titulo: "Manejo Módulos",
        texto:
          "Cuando trabajamos con Node.js, tenemos que tener presente que los archivos se encuentran aíslados uno de otro por lo que es necesario familiarizarse con los conceptos de import/export que se incorporan a JS en ES6. Usar import nos permite incorporar el código de otro archivo en el actual; mientras que Export nos permite sacar el código del archivo actual. Sin Export, no puede haber Import.",
        images: ["assets/images/export.png", "assets/images/exportDefault.png"],
        doc: "",
      },
      {
        id: "babel",
        titulo: "Babel",
        texto:
          "Babel es un transpilador de código JavaScript. Un transpilador se encarga de leer y adecuar código según lo deseado. Trabajando con React Babel juego un rol fundamental a la hora de interpretar el códgio JSX que es azucar sintáctica que nos ayuda a crear Componentes con una sintáxis simil HTML. sin contar que Babel se encargará de interpretar todo el código JS escrito en ECMAScript 2015 o superior y generar la transformación necesaria para que nuestro código pueda ser interpretado por todos los navegadores.",
        images: [],
        doc: "https://babeljs.io/",
      },
      {
        id: "webpack",
        titulo: "Webpack",
        texto:
          "Es un creador de módulos estáticos para subirlos a la web. En otras palabras, es Webpack que se encarga de que nuestro código de 'Desarrollo' se convierta en código de 'Producción'",
        images: [],
        doc: "https://webpack.js.org/concepts/",
      },

      {
        id: "reactApp",
        titulo: "Create-react-app",
        texto:
          "React surge en el 2013 y cuando los desarrolladores querían trabajar combinar React a Node, Babel y Webpack debían hacerlo de forma manual configurando cada tecnología individualmente. En Julio de 2016 Facebook lanza una herramienta para facilitar el set-up inicial de nuestro entorno de trabajo: 'create-react-app'. A partir de ese momento la configuración mínima requerida se hace de forma automática ejecutando el código 'npx create-react-app nombreApp' en una terminal (es necesario tener instalado Node.js en nuestra computadora)",
        images: [],
        doc: "https://create-react-app.dev/",
      },
    ],
  },
  {
    id: "pensadoReact",
    titulo: "Pensando en React",
    texto:
      "Para sacar el mayor partido de React, debemos a empezar a pensar en React lo que implica una serie de pasos que debemos considerar antes de empezar a trabajar en nuestro código.",
    images: [],
    doc: "https://es.reactjs.org/docs/thinking-in-react.html#gatsby-focus-wrapper",
    secundarios: [
      {
        id: "paso1",
        titulo: "Paso 1: Dividir la interfaz en jerarquía de componentes",
        texto:
          "Como ya vimos, React tiene un flujo de datos unidimensional de arriba abajo. Siguiendo esta noción es posible crear una jerarquización de componentes sabiendo que los componentes que tengan el dato a pasar tienen que ser padres de los componentes que vayan a utilizar el dato obtenido",
        images: ["assets/images/jerarquias.png"],
        doc: "",
      },
      {
        id: "paso2",
        titulo: "Paso 2: Crear una versión estática en React",
        texto:
          "Una vez establecida la jerarquía llega el momento de empezar a escribir nuestros componentes, pero en este paso no vamos a generar ningún tipo de funcionalidad. Aca lo que nos interesa es asegurarnos que los componentes se están renderizandose de forma correcta y en el orden correcto. Además, más adelante, esto nos ayuda a seguir el progreso de nuestra aplicación. ",
        images: [""],
        doc: "",
      },
      {
        id: "paso3",
        titulo:
          "Paso 3: Identificar la versión mínima (pero completa) del estado de tu interfaz de usuario",
        texto:
          "Para hacer tu interfaz de usuario interactiva vas a necesitar realizar cambios en tu modelo de datos interno. React lo logra gracias a su estado. Para armar tu aplicación de forma correcta necesitas primero pensar en la mínima cantidad de estado mutable que necesita la aplicación. Lo importante acá es que no te repitas (DRY: Don't Repeat Yourself). Necesitas descubrir la mínima representación del estado que tu aplicación va a necesitar y calcular el resto bajo demanda. Por ejemplo, si estás creando una lista de tareas pendientes, solo mantén un array de las tareas, no mantengas una variable a parte en el estado para contar cuantas hay. En vez de eso, cuando vayas a mostrar cuántas hay simplemente obtén el largo del array de tareas. ",
        images: [""],
        doc: "",
      },
      {
        id: "paso4",
        titulo: "Paso 4: Identificar dónde debe vivir tu estado",
        texto:
          "Esta es la parte que más cuesta cuando se está empezando con React. Para poder realizar correctamente este paso tenemos que tener presente como maneja React el flujo de datos (unidimensionalmente de arriba hacia abajo) y qué elementos van a sufrir alguna modificación en caso de que el valor almacenado en el estado cambie. Todo componente que se vea afectado por un estado debe ser hijo del componente que posea el estado",
        images: [""],
        doc: "",
      },
      {
        id: "paso5",
        titulo: "Paso 5: Agregar flujo de datos inverso",
        texto:
          "Sí, React sólo maneja el flujo de datos de forma unidimensional de arriba hacia abajo pero en nuestras aplicaciones a menudo nos vamos a encontrar en la necesidad de que un Componente hijo modifique el estado del Componente padre para cambiar algún elemento dentro de nuestra aplicación. Existen varias formas de lograrlo y a lo largo del curso las vamos a ir estudiando, pero por ahora nos interesa aclarar que es posible y que, además, tiene que ser el último paso en la estructuración de nuestra aplicación.",
        images: [""],
        doc: "",
      },
    ],
  },
  {
    id: "ejercicio",
    titulo: "Ejercicio",
    texto:
      "Para prácticar todo los visto hasta ahora vamos a crear una app que muestre los nombres de las tres tecnologías necesarias para configurar nuestro Ambiente de Trabajo",
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
