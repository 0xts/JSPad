import ReactDOM from "react-dom";
import "bulmaswatch/superhero/bulmaswatch.min.css";

//import CodeSpace from "./components/code-space";
import MarkdownSpace from "./components/markdown-space";

const App = () => {
  return (
    <div>
      <MarkdownSpace />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
