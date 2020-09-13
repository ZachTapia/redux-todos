import * as actionTypes from "../actions/actionTypes";

const initialState = {
  focusedTodo: {}
};

const focusedTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.focusTodo: {
      return {
        ...state,
        focusedTodo: action.payload.focusedTodo
      };
    }

    // If the currently focusedTodo is deleted, then reset focusedTodo
    case actionTypes.deleteTodo: {
      if (action.payload.id === state.focusedTodo.id) {
        return {
          ...state,
          focusedTodo: {}
        };
      }

      return state;
    }

    default:
      return state;
  }
};

export default focusedTodoReducer;
