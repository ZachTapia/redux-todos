import * as actionTypes from "./actionTypes";

export const addTodo = (title) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: actionTypes.ADD_TODO,
        payload: { title: title }
      });
    }, 2000);
  };
};

export const toggleTodoComplete = (id) => {
  return {
    type: actionTypes.TOGGLE_TODO_COMPLETE,
    payload: {
      id: id
    }
  };
};

export const deleteTodo = (id) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: { id: id }
  };
};
