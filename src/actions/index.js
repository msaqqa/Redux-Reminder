import { ADD_REMINDER, DELETE_REMINDER, CLEAR } from "../types";

export const Add_reminder = (text, date) => {
  if(text && date){
    const action = {
      type: ADD_REMINDER,
      text,
      date,
    };
    return action;
  }
};

export const delete_reminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id,
  };
  return action;
};

export const clear_reminders = () => {
  const action = {
    type: CLEAR,
  };
  return action;
};
