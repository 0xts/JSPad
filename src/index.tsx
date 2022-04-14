import ReactDOM from "react-dom";
import "bulmaswatch/superhero/bulmaswatch.min.css";

import CodeSpace from "./components/code-space";

const App = () => {
  return (
    <div>
      <CodeSpace />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
