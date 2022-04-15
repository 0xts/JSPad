import { useSelector, TypedUseSelectorHook } from "react-redux";

import { RootState } from "../services/state-management";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;