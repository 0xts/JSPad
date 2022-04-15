import { produce } from "immer";

import { Action } from "../actions";
import { ActionType } from "../actions/types";

interface BundlesState {
  [key: string]: {
    code: string;
    err: string;
  };
}

const initialState: BundlesState = {};

export const BundlesReducer = produce(
  (state: BundlesState = initialState, action: Action): BundlesState => {
    switch (action.type) {
      case ActionType.BUNDLE_CREATED_ACTION:
        state[action.payload.spaceId] = action.payload.bundle;
        return state;
      default:
        return state;
    }
  },
  initialState
);
