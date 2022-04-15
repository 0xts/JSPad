import React from "react";

import { useAction } from "../../hooks/use-actions";
import "./add-space.css";

interface AddSpaceProps {
  prevSpaceId: string | null;
  forceVisible?: boolean;
}

const AddSpace: React.FC<AddSpaceProps> = ({ forceVisible, prevSpaceId }) => {
  const { insertSpaceAfter } = useAction();
  return (
    <div className={`add-space ${forceVisible && "force-visible"}`}>
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => {
            insertSpaceAfter(prevSpaceId, "code");
          }}
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span>Code</span>
        </button>
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => {
            insertSpaceAfter(prevSpaceId, "markdown");
          }}
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddSpace;
