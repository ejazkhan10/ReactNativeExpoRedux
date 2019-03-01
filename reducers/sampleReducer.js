import { SHOW_WELCOME } from "../actions/types";
const initialState = {
  isAuthenticated: false,
  user: "Hi",
  loading: false,
  passwordreset: false,
  tokenStatus: false,
  passwordChanged: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_WELCOME:
      return {
        ...state,
        user: "Welcome"
      };
    default:
      return state;
  }
}
