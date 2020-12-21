import './App.css';
import Cakecontainer from "./components/Cakecontainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cakecontainer/>
      </div>
    </Provider>
    );
}

export default App;
