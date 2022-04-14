import { useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import prettier from "prettier";
import parser from "prettier/parser-babel";

import "./code-editor.css";
import "./syntax-highlight.css";

interface EditorProps {
  onChange(value: string | undefined): void;
}

type Monaco = typeof monaco;

const CodeEditor: React.FC<EditorProps> = ({ onChange }) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();

  const onEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) => {
    editorRef.current = editor;

    // **************TODO: Fix JSX highlighting**************
    // const { default: traverse } = await import("@babel/traverse");
    // const { parse } = await import("@babel/parser");
    // const { default: MonacoJSXHighlighter } = await import(
    //   "monaco-jsx-highlighter"
    // );

    // const highlighter = new MonacoJSXHighlighter(
    //   //@ts-ignore
    //   window.monaco,
    //   parse,
    //   traverse,
    //   editor
    // );
    // highlighter.highlightOnDidChangeModelContent();
    // highlighter.addJSXCommentCommand();
  };

  const onFormatClickHandler = () => {
    const unformattedCode = editorRef.current?.getModel()?.getValue();
    const formattedCode = prettier
      .format(unformattedCode ? unformattedCode : "", {
        parser: "babel",
        plugins: [parser],
        useTabs: false,
      })
      .replace(/\n$/, "");
    editorRef.current?.getModel()?.setValue(formattedCode);
  };

  return (
    <div className="editor-wrapper">
      <button
        className="button button-format is-primary is-small"
        onClick={onFormatClickHandler}
      >
        Format
      </button>
      <MonacoEditor
        onMount={onEditorDidMount}
        onChange={(value, event) => {
          onChange(value);
        }}
        defaultValue=""
        theme="vs-dark"
        language="javascript"
        height="100%"
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
