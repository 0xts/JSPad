import { useRef, useEffect } from "react";

import { html } from "./code-preview-html";

interface CodePreviewProps {
  code: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({ code }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    iframe.current.contentWindow.postMessage(code, "*");
  }, [code]);

  return (
    <div>
      <iframe
        ref={iframe}
        title="code-preview"
        sandbox="allow-scripts"
        srcDoc={html}
      />
    </div>
  );
};

export default CodePreview;
