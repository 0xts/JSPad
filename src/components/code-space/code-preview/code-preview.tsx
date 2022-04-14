import { useRef, useEffect } from "react";

import { html } from "./code-preview-html";
import "./code-preview.css";

interface CodePreviewProps {
  code: string;
  err: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({ code, err }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        ref={iframe}
        title="code-preview"
        sandbox="allow-scripts"
        srcDoc={html}
      />
      {err && <div className="err-wrapper">{err}</div>}
    </div>
  );
};

export default CodePreview;
