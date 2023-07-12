import { createContext } from "react";

const SectionContext = createContext();
const temas = [
  {
    id: "mock-api",
    titulo: "Mock Api",
    texto:
      "Es una APIRest que nos permite generar datos falsos y trabjar con los cuatro verbos de Request (get, post, put, delete).",
    images: [],
    doc: "https://mockapi.io/",
    secundarios: [],
  },
  {
    id: "async-await",
    titulo: "Async/Await",
    texto:
      "Tenemos dos partes cuando usamos async/await en nuestro código.En primer lugar, tenemos la palabra clave async , que se pone delante de una declaración de función para convertirla en una función async. Una función asíncrona es una función que sabe que es posible que se use la palabra clave  await dentro de ella para invocar código asíncrono.  La palabra clave async se añade a las funciones para que devuelvan una promesa en lugar de un valor directamente.",
    images: ["assets/images/async.png"],
    doc: "https://www.freecodecamp.org/espanol/news/como-usar-async-await-para-escribir-un-codigo-mejor-en-javascript/",
    secundarios: [],
  },
  {
    id: "useEffect",
    titulo: "LLamadas AJAX useEffect",
    texto:
      "useEffect() no admite devoluciones de llamada async porque tales funciones normalmente requieren limpieza. Los efectos secundarios deben manejarse con delicadeza, y el mal manejo de una función async dentro del Hook podría provocar pérdidas de memoria u otros errores que podrían exponer la aplicación. Es por eso que el equipo detrás de React decidió no permitirlo. En otras palabras si queremos convervir la función anónima que le pasamos al useEffect() en una función asíncrona, obtendremos un error que indica que el hook no lo permite. Para poder utilizar funciones asíncronas dentro de useEffect() debemos crearla y ejecutarla dentro de la callback",
    images: ["assets/images/async1.png", "assets/images/async2.png"],
    doc: "https://es.reactjs.org/docs/hooks-reference.html#timing-of-effects",
    secundarios: [
      {
        id: "useFetch",
        titulo: "Crear Hook Personalizado para manjear Fetch",
        texto:
          "Recordemos que los Hooks Personalizados son una excelente forma de separar la lógica de la visualización en nuestros componentes y cuando hacemos llamadas AJAX es necesario aplicar cierta lógica para poder manejar las distintas situaciones que se nos pueden presentar por lo que nos da una oportunidad única de plantear un Hook Personalizado",
        images: [
          "assets/images/hookPersonalizado.png",
          "assets/images/hookPersonalizado1.png",
          "assets/images/hookPersonalizado2.png",
        ],
        doc: "",
      },
    ],
  },
  {
    id: "ejercicio",
    titulo: "Ejercicio",
    texto:
      "Para prácticar todo los visto hasta ahora vamos a armar una aplicación que muestre citas y cambie su color de fondo de forma aleatoria. La aplicación debe iniciar mostrando una cita y un color de fondo y modificarlos cuando el usuario haga click. Se propone el uso de las siguientes API's Rest: 'https://api.quotable.io/random - citas' y 'https://62633b22c430dc560d2cf4d6.mockapi.io/colors - colores' (pueden ser reemplazadas)",
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
