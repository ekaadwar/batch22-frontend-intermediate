const initialState = {
  data: {},
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE": {
      return {
        ...state,
        data: action.payload,
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
