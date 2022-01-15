import { ADD_SMS } from "./actions-messages";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMS:
      return [...state, {message: action.payload, date: new Date().toLocaleTimeString().slice(0,-3)}];
    default:
      return state;
  }
};
