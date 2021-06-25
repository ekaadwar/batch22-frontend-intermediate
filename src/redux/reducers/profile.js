const initialState = {
  data: {},
  errMsg: "",
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE": {
      return {
        ...state,
        data: action.payload,
      };
    }
    case "UPDATE_PROFILE": {
      return {
        ...state,
        data: action.payload,
      };
    }
    case "UPDATE_PROFILE_FAILED": {
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

export default profile;
