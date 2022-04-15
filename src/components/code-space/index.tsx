import CodeEditor from "./code-editor/code-editor";
import CodePreview from "./code-preview/code-preview";
import Resizable from "../resizable-window";
import { Space } from "../../services/state-management";
import { useAction } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-typed-selector";

interface CodeSpaceProps {
  space: Space;
}

const CodeSpace: React.FC<CodeSpaceProps> = ({ space }) => {
  const { updateSpace } = useAction();

  const bundle = useTypedSelector((state) => {
    return state.bundles[space.id]
      ? state.bundles[space.id]
      : { code: "", err: "" };
  });

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: "calc(100% - 10px)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={space.content}
            onChange={(value: string) => updateSpace(space.id, value)}
          />
        </Resizable>
        <CodePreview code={bundle.code} err={bundle.err} />
      </div>
    </Resizable>
  );
};

export default CodeSpace;
