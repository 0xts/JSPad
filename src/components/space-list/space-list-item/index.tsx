import { Space } from "../../../services/state-management";
import CodeSpace from "../../code-space";
import MarkdownSpace from "../../markdown-space";
import ActionBar from "../action-bar";
import "./space-list-item.css";

interface SpaceListItemProps {
  space: Space;
}

const SpaceListItem: React.FC<SpaceListItemProps> = ({ space }) => {
  let newSpace: JSX.Element;

  if (space.type === "code") {
    newSpace = (
      <>
        <div className="action-bar-wrapper">
          <ActionBar id={space.id} />
        </div>
        <CodeSpace space={space} />
      </>
    );
  } else {
    newSpace = (
      <>
        <MarkdownSpace space={space} />
        <ActionBar id={space.id} />
      </>
    );
  }

  return <div className="cell-list-item">{newSpace}</div>;
};

export default SpaceListItem;
