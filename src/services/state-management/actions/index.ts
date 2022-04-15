import { ActionType } from "./types";
import { SpaceMovement, SpaceType } from "../space-interface";

export interface MoveSpaceAction {
  type: ActionType.MOVE_SPACE;
  payload: {
    id: string;
    direction: SpaceMovement;
  };
}

export interface DeleteSpaceAction {
  type: ActionType.DELETE_SPACE;
  payload: {
    id: string;
  };
}

export interface UpdateSpaceAction {
  type: ActionType.UPDATE_SPACE;
  payload: {
    id: string;
    content: string;
  };
}

export interface InsertSpaceBeforeAction {
  type: ActionType.INSERT_SPACE_BEFORE;
  payload: {
    id: string | null;
    type: SpaceType;
  };
}

export type Action =
  | InsertSpaceBeforeAction
  | MoveSpaceAction
  | DeleteSpaceAction
  | UpdateSpaceAction;
