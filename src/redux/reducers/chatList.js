// import React from "react";

import jason from "../../img/profile/jason.png";
import cheryn from "../../img/profile/cheryn.png";
import lou from "../../img/profile/lou.png";

const initialState = [
  {
    image: cheryn,
    name: "Ayang Beb",
    message: "Pagi Beb, Udah makan? :)",
  },
  {
    image: jason,
    name: "Jason",
    message: "Hey, I’m Jason, Let’s talk and share what’s on your thoughts!",
  },
  {
    image: lou,
    name: "Lou",
    message:
      "Hey, I’m Lou, I’ll here to help you, just talk to me and we solve the problme. Have a good day!",
  },
  {
    image: lou,
    name: "Boss Ndut",
    message: "Hey you!!!",
  },
  {
    image: lou,
    name: "Pak De",
    message: "Hey you!!!",
  },

  {
    image: lou,
    name: "Luna Maya",
    message: "Hello :)",
  },
];

const chatList = (state = initialState) => {
  console.log(state);
  return state;
};

export default chatList;
