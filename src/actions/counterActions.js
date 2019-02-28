// Action Types
export const UPDATE_COUNTER = "UPDATE_COUNTER";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";

// Action Creators
export function incCounter(counterStep) {
  return {
      type: UPDATE_COUNTER,
      payload: counterStep
    };
}