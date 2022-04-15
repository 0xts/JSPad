import { bundle } from "../../bundler";
import { ActionType } from "../actions/types";
import { Middleware } from "./middleware-type";

let timer: any;

export const bundlerMiddleware: Middleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type !== ActionType.UPDATE_SPACE) {
      return;
    }

    const {
      spaces: { data: spaceData },
    } = getState();
    const space = spaceData[action.payload.id];

    if (space.type === "markdown") {
      return;
    }

    clearTimeout(timer);
    timer = setTimeout(async () => {
      const result = await bundle(action.payload.content);

      dispatch({
        type: ActionType.BUNDLE_CREATED_ACTION,
        payload: {
          spaceId: action.payload.id,
          bundle: result,
        },
      });
    }, 750);
  };
