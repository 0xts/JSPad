import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { ActionType } from "../actions/types";
import { rootReducer } from "../reducers";
import { bundlerMiddleware } from "../middlewares/bundler-middleware";

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(bundlerMiddleware, thunk)
);

store.dispatch({
  type: ActionType.INSERT_SPACE_AFTER,
  payload: {
    id: null,
    type: "markdown",
  },
});

store.dispatch({
  type: ActionType.INSERT_SPACE_AFTER,
  payload: {
    id: null,
    type: "code",
  },
});
