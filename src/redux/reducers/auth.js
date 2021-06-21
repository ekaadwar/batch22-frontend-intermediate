const initialState = {
  onAuth: false,
  token: null,
  owner: "Si Eka",
  errMsg: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_TOGGLE": {
      return {
        ...state,
        onAuth: !state.onAuth,
      };
    }
    case "AUTH_LOGIN": {
      return {
        ...state,
        token: action.payload,
      };
    }
    case "AUTH_LOGIN_FAILED": {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default auth;
