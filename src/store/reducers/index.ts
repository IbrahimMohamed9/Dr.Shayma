import { combineReducers } from "redux";
import { passwordIconReducer } from "./passwordIconReducer";

export const rootReducer = combineReducers({
  passwordVisible: passwordIconReducer,
});
