import * as actionTypes from "./actionTypes";

export const changeVisibility = (visibility) => {
  return {
    type: actionTypes.CHANGE_VISIBILITY,
    payload: { visibility: visibility }
  };
};
