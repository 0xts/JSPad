import { Fragment } from "react";

import { useTypedSelector } from "../../hooks/use-typed-selector";
import SpaceListItem from "./space-list-item";
import AddSpace from "../add-space";

const SpaceList: React.FC = () => {
  const spaces = useTypedSelector(({ spaces: { order, data } }) =>
    order.map((id) => data[id])
  );

  const renderedSpaces = spaces.map((space) => (
    <Fragment key={space.id}>
      <SpaceListItem key={space.id} space={space} />
      <AddSpace prevSpaceId={space.id} />
    </Fragment>
  ));
  return (
    <div>
      <AddSpace forceVisible={spaces.length === 0} prevSpaceId={null} />
      {renderedSpaces}
    </div>
  );
};

export default SpaceList;
