import { combineReducers } from "redux";
import { spaceReducer } from "./spaces-reducer";
import { BundlesReducer } from "./bundles-reducer";

export const rootReducer = combineReducers({
  spaces: spaceReducer,
  bundles: BundlesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
