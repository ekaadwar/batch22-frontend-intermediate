import { combineReducers } from "redux";

import carts from "./carts";
import auth from "./auth";
import items from "./items";
import profile from "./profile";

const reducer = combineReducers({
  carts,
  auth,
  items,
  profile,
});

export default reducer;
