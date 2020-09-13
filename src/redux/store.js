import { createStore, combineReducers } from "redux";
import todosReducer from "./reducers/todosReducer";
import focusedTodoReducer from "./reducers/focusedTodoReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  focusedTodo: focusedTodoReducer
});

// Takes combined reducers
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
