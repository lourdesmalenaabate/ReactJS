//Paquetes a instalar: redux react-redux redux-devtools-extension

import { Provider } from "react-redux"; //Componente que envuelve a todos los Componentes de nuestra App para pasar la información almacenada en el store
//import Contador from "./components/Contador";
import HackerNews from "./components/HackerNews";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="p-2">
        {/* <Contador /> */}
        <HackerNews />
      </div>
    </Provider>
  );
}

export default App;
