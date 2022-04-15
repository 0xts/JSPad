import { combineReducers } from "redux";
import { spaceReducer } from "./spaces-reducer";

export const rootReducer = combineReducers({
  spaces: spaceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
