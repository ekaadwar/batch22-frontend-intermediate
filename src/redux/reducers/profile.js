const initialState = {
  // data: {
  //   id: 3,
  //   photo: "null",
  //   name: "Eka Fajhari Adwar",
  //   email: "admin@mail.com",
  //   name_shown: "Eka Adwar",
  //   name_first: "Eka",
  //   name_last: "Fajhari Adwar",
  //   birth_date: "1996-09-27",
  //   gender: "male",
  //   phone: "+6282100000000",
  //   address: "Jl RS Fatmawati 5, Dki Jakarta",
  // },
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
