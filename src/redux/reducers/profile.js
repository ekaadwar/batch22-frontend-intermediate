const initialState = {
  profile: {},
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE": {
      return {
        ...state,
        profile: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default profile;
