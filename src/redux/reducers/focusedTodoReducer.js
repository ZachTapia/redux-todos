import * as actionTypes from "../actions/actionTypes";

const initialState = {
  focusedTodo: {}
};

const focusedTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FOCUS_TODO: {
      return {
        ...state,
        focusedTodo: action.payload.focusedTodo
      };
    }

    // If the currently focusedTodo is deleted, then reset focusedTodo
    case actionTypes.DELETE_TODO: {
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
