import { bake_cookie, read_cookie } from "sfcookies";
import { ADD_REMINDER, DELETE_REMINDER, CLEAR } from "../types";

const Reducer = (state = [], action) => {
  state = read_cookie("state");
  if (action.type === ADD_REMINDER) {
    state = [
      ...state,
      { text: action.text, date: action.date, id: Math.random() },
    ];
    bake_cookie("state", state);
    return state;
  } else if (action.type === DELETE_REMINDER) {
    state = state.filter((reminder) => reminder.id !== action.id);
    bake_cookie("state", state);
    return state;
  } else if (action.type === CLEAR) {
    state = [];
    bake_cookie("state", state);
    return state;
  } else {
    return state;
  }
};

export default Reducer;
