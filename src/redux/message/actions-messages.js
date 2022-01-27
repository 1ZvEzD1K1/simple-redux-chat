export const ADD_SMS = "ADD_SMS";

export const addMessage = (payload) => {
  return {
    type: ADD_SMS,
    payload,
  };
};
