import { SHOW_WELCOME } from "./types";

export const showWelcome = () => dispatch => {
  dispatch({
    type: SHOW_WELCOME
  });
};
