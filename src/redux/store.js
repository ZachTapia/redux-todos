import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import todosReducer from "./reducers/todosReducer";
import focusedTodoReducer from "./reducers/focusedTodoReducer";
import visibilityReducer from "./reducers/visibilityReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  focusedTodo: focusedTodoReducer,
  visibility: visibilityReducer
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);

      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Takes combined reducers
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
