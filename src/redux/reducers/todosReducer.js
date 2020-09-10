import * as actionTypes from "../actions/actionTypes";

const initialState = {
  todos: [
    { id: 1, title: "Wash car", completed: true },
    { id: 2, title: "Do HW", completed: false },
    { id: 3, title: "Walk dog", completed: false }
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
            id: state.todos[state.todos.length - 1].id + 1,
            title: action.payload.title,
            completed: false
          }
        ]
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
