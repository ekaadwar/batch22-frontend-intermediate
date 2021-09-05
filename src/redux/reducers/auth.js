const initialState = {
  onAuth: false,
  userId: 3,
  token: null,
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
    case "CLEAR_AUTH_TOGGLE": {
      return {
        ...state,
        onAuth: false,
      };
    }
    case "AUTH_LOGIN": {
      return {
        ...state,
        // userId: action.payload.userId,
        token: action.payload.token,
      };
    }
    case "CLEAR_AUTH_MESSAGE": {
      return {
        ...state,
        errMsg: "",
      };
    }
    case "AUTH_LOGOUT": {
      return {
        ...state,
        token: null,
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
