import { createStore, combineReducers } from "redux";
import todosReducer from "./reducers/todosReducer";

const rootReducer = combineReducers({
  todos: todosReducer
});

// Takes combined reducers
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
