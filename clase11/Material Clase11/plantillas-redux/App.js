import { Provider } from "react-redux";
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
