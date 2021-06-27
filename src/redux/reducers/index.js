import { combineReducers } from "redux";

import carts from "./carts";
import auth from "./auth";
import items from "./items";
import profile from "./profile";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persisAuth = {
  storage,
  key: "auth",
};

const reducer = combineReducers({
  carts,
  auth: persistReducer(persisAuth, auth),
  items,
  profile,
});

export default reducer;
