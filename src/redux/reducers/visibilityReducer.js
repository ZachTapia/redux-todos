import * as actionTypes from "../actions/actionTypes";

const initialState = {
  visibility: ""
};

const visibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.changeVisibility: {
      return {
        ...state,
        visibility: action.payload.visibility
      };
    }

    default:
      return state;
  }
};

export default visibilityReducer;
