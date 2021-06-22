const initialState = {
  data: [],
  pageInfo: {},
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case "ITEMS_GET": {
      return {
        ...state,
        data: action.payload.items,
        pageInfo: action.payload.pageInfo,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default items;
