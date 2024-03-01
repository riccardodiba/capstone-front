import { POST_LOGIN, POST_REGISTER } from "../action/login";

const initialState = {
  content: null,
  token: "",
  role: "",
 // uuid:""
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REGISTER:
      return {
        ...state,
        content: action.payload,
      };
    case POST_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.role
      }

    default:
      return state;
  }
};

export default registerReducer;
