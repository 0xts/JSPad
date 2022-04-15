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

export interface InsertSpaceAfterAction {
  type: ActionType.INSERT_SPACE_AFTER;
  payload: {
    id: string | null;
    type: SpaceType;
  };
}

export interface BundleCreatedAction {
  type: ActionType.BUNDLE_CREATED_ACTION;
  payload: {
    spaceId: string;
    bundle: {
      code: string;
      err: string;
    };
  };
}

export type Action =
  | InsertSpaceAfterAction
  | MoveSpaceAction
  | DeleteSpaceAction
  | UpdateSpaceAction
  | BundleCreatedAction;
