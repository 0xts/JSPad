import {
  DeleteSpaceAction,
  InsertSpaceBeforeAction,
  MoveSpaceAction,
  UpdateSpaceAction,
} from ".";
import { SpaceMovement, SpaceType } from "../space-interface";
import { ActionType } from "./types";

export const updateSpace = (id: string, content: string): UpdateSpaceAction => {
  return {
    type: ActionType.UPDATE_SPACE,
    payload: {
      id,
      content,
    },
  };
};
export const insertSpaceBefore = (
  id: string,
  type: SpaceType
): InsertSpaceBeforeAction => {
  return {
    type: ActionType.INSERT_SPACE_BEFORE,
    payload: {
      id,
      type,
    },
  };
};
export const deleteSpace = (id: string): DeleteSpaceAction => {
  return {
    type: ActionType.DELETE_SPACE,
    payload: {
      id,
    },
  };
};
export const moveSpace = (
  id: string,
  direction: SpaceMovement
): MoveSpaceAction => {
  return {
    type: ActionType.MOVE_SPACE,
    payload: {
      id,
      direction,
    },
  };
};
