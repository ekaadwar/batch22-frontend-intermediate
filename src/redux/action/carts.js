export const addItems = (data) => {
  return {
    type: "CARTS_ADD_ITEM",
    payload: {
      items: data.details,
      amount: data.countAmount,
      subTotal: data.subTotal,
      tax: data.tax,
      shipping: data.shipping,
      total: data.total,
    },
  };
};

export const countAmount = (counter) => {
  return {
    type: "COUNT_AMOUNT",
    payload: counter,
  };
};
