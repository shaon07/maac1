import { POST_TOKEN } from "../constants/All";

const initData = {
  token: "",
};

const postTokenReducer = (state = initData, action) => {
  switch (action.type) {
    case POST_TOKEN:
      return {
        token: action.payload,
      };

    default:
      return state;
  }
};

export default postTokenReducer;
