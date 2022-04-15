import { useState, useEffect } from "react";

import CodeEditor from "./code-editor/code-editor";
import CodePreview from "./code-preview/code-preview";
import Resizable from "../resizable-window";
import { bundle } from "../../services/bundler";

const CodeSpace = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const bundledCode = await bundle(input);
      setCode(bundledCode.code);
      setErr(bundledCode.err);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="horizontal">
          <CodeEditor onChange={(value: string) => setInput(value)} />
        </Resizable>
        <CodePreview code={code} err={err}/>
      </div>
    </Resizable>
  );
};

export default CodeSpace;
