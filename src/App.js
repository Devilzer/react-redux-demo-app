import './App.css';
import Cakecontainer from "./components/Cakecontainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import CookieContainer from "./components/CookieContainer";
import NewCookieContainer from "./components/NewCookieContainer";
import { Provider } from "react-redux";
import  store  from "./redux/store";
import UserContainer from "./components/UserContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer/>
        {/* <HooksCakeContainer/>
        <Cakecontainer/>
        <IceCreamContainer/>
        <CookieContainer/>
        <NewCookieContainer/> */}
      </div>
    </Provider>
    );
}

export default App;
