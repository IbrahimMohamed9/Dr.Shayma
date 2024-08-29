import { HIDE_PASSWORD, SHOW_PASSWORD } from "../actions/passwordIconActions";

type ActionType = {
  type: string;
};

export const passwordIconReducer = (state = false, action: ActionType) => {
  switch (action.type) {
    case SHOW_PASSWORD:
      return true;
    case HIDE_PASSWORD:
      return false;
    default:
      return state;
  }
};
