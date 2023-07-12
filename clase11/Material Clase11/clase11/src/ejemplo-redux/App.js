//Paquetes a instalar: redux react-redux readux-devtools-extensions redux-thunk

import { Provider } from "react-redux"; //Componente que envuelve a todos los Componentes de nuestra App para pasar la información almacenada en el store
import CrudApi from "./components/CrudApi";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="p-2">
        <CrudApi />
      </div>
    </Provider>
  );
}

export default App;
