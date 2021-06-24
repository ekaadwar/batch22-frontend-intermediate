const initialState = {
  items: [],
  amount: [],
  countAmount: 1,
  subTotal: 0,
  tax: 0,
  shipping: 0,
  total: 0,
  address: "",
  method: "",
};

const carts = (state = initialState, action) => {
  switch (action.type) {
    case "CARTS_ADD_ITEM": {
      return {
        ...state,
        items: [...state.items, ...[action.payload.items]],
        amount: [...state.amount, ...[action.payload.amount]],
        countAmount: 1,
      };
    }
    case "COUNT_AMOUNT": {
      return {
        ...state,
        countAmount: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default carts;
