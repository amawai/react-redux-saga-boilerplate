import { UPDATE_SUCCESS } from "../actions/counterActions";

const initialState = 0;

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SUCCESS:
      return state + action.payload;
    default:
      return state;
  }
};