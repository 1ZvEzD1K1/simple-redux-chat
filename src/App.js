import { Provider } from "react-redux";
import "./App.css";
import Chat from "./components/Chat";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="back-fon">
        <Chat />
      </div>
    </Provider>
  );
}

export default App;
