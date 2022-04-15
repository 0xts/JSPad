import produce from "immer";

import { Action } from "../actions";
import { ActionType } from "../actions/types";
import { Space, SpacesState } from "../space-interface";

const initialState: SpacesState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const rIdGen = () => {
  return Math.random().toString(36).substring(2, 5);
};

export const spaceReducer = produce(
  (
    state: SpacesState = initialState,
    action: Action
  ): SpacesState => {
    switch (action.type) {
      case ActionType.DELETE_SPACE:
        delete state.data[action.payload.id];
        state.order = state.order.filter((id) => id !== action.payload.id);
        return state;
      case ActionType.INSERT_SPACE_AFTER:
        const space: Space = {
          id: rIdGen(),
          type: action.payload.type,
          content: "",
        };

        state.data[space.id] = space;

        const indexToInsertAt = state.order.findIndex(
          (id) => id === action.payload.id
        );

        if (indexToInsertAt < 0) {
          state.order.unshift(space.id);
        } else {
          state.order.splice(indexToInsertAt + 1, 0, space.id);
        }

        return state;
      case ActionType.MOVE_SPACE:
        const { direction } = action.payload;
        const index = state.order.findIndex((id) => id === action.payload.id);
        const targetIndex = direction === "up" ? index - 1 : index + 1;

        if (targetIndex < 0 || targetIndex > state.order.length - 1) {
          return state;
        }

        state.order[index] = state.order[targetIndex];
        state.order[targetIndex] = action.payload.id;
        return state;
      case ActionType.UPDATE_SPACE:
        const { id, content } = action.payload;
        state.data[id].content = content;
        return state;
      default:
        return state;
    }
  }
,initialState);
