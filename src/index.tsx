import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bulmaswatch/superhero/bulmaswatch.min.css";

//import CodeSpace from "./components/code-space";
import MarkdownSpace from "./components/markdown-space";
import { store } from "./services/state-management";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <MarkdownSpace />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
