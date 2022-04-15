import { useState, useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";

import { Space } from "../../services/state-management";
import { useAction } from "../../hooks/use-actions";
import "./markdown-space.css";

interface MarkdownSpaceProps {
  space: Space;
}

const MarkdownSpace: React.FC<MarkdownSpaceProps> = ({ space }) => {
  const [editing, setEditing] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { updateSpace } = useAction();

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }
      setEditing(false);
    };

    document.addEventListener("click", listener, { capture: true });

    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div className="text-editor" ref={ref}>
        <MDEditor
          value={space.content}
          onChange={(v) => {
            updateSpace(space.id, v || "");
          }}
        />
      </div>
    );
  }

  return (
    <div className="text-editor card" onClick={() => setEditing(true)}>
      <div className="card-content">
        <MDEditor.Markdown source={space.content} />
      </div>
    </div>
  );
};

export default MarkdownSpace;
