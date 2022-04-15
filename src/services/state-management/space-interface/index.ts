export type SpaceType = "code" | "markdown";
export type SpaceMovement = "up" | "down";

export interface Space {
  id: string;
  type: SpaceType;
  content: string;
}

export interface SpacesState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Space;
  };
}
