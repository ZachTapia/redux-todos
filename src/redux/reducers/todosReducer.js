import * as actionTypes from "../actions/actionTypes";

const initialState = {
  todos: [
    { id: 1, title: "Wash car", completed: true },
    { id: 2, title: "Do HW", completed: false }
  ]
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addTodo: {
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

    case actionTypes.deleteTodo: {
      const newTodosArray = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );

      return {
        ...state,
        todos: newTodosArray
      };
    }

    case actionTypes.toggleTodoComplete: {
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
