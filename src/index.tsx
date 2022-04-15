import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bulmaswatch/superhero/bulmaswatch.min.css";

//import CodeSpace from "./components/code-space";
//import MarkdownSpace from "./components/markdown-space";
import SpaceList from "./components/space-list";
import { store } from "./services/state-management";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <SpaceList />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
