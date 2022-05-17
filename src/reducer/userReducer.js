const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER":
      return action.payload;
    case "CLEAR":
      state = null;
      return state;
    default:
      return state;
  }
};

export default userReducer;
