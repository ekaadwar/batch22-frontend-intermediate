const initialState = {
  onAuth: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_TOGGLE": {
      return {
        ...state,
        onAuth: !state.onAuth,
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
