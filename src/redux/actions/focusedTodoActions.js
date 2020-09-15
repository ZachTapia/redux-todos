import * as actionTypes from "./actionTypes";

export const focusTodo = (focusedTodo) => {
  return {
    type: actionTypes.FOCUS_TODO,
    payload: { focusedTodo: focusedTodo }
  };
};
