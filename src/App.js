import './App.css';
import Cakecontainer from "./components/Cakecontainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import CookieContainer from "./components/CookieContainer";
import { Provider } from "react-redux";
import  store  from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
        <Cakecontainer/>
        <IceCreamContainer/>
        <CookieContainer/>
      </div>
    </Provider>
    );
}

export default App;
