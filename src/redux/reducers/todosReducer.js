import * as actionTypes from "../actions/actionTypes";

const initialState = {
  todos: []
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS: {
      return {
        ...state,
        todos: action.payload.todos
      };
    }

    case actionTypes.ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id:
              state.todos.length > 0
                ? state.todos[state.todos.length - 1].id + 1
                : 1,
            title: action.payload.title,
            completed: false
          }
        ]
      };
    }

    case actionTypes.DELETE_TODO: {
      const newTodosArray = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );

      return {
        ...state,
        todos: newTodosArray
      };
    }

    case actionTypes.TOGGLE_TODO_COMPLETE: {
      const newTodosArray = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      });

      return {
        ...state,
        todos: newTodosArray
      };
    }

    default: {
      return state;
    }
  }
};

export default todosReducer;
