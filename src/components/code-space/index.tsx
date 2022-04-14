import { useState } from "react";

import CodeEditor from "./code-editor/code-editor";
import CodePreview from "./code-preview/code-preview";
import { bundle } from "../../services/bundler";

const CodeSpace = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");

  const onClick = async () => {
    const bundledCode = await bundle(input);
    setCode(bundledCode);
  };

  return (
    <div>
      <CodeEditor onChange={(value: string) => setInput(value)} />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <CodePreview code={code} />
    </div>
  );
};

export default CodeSpace;
