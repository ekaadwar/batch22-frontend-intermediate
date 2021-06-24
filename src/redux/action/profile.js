import { http } from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getProfile = (token) => {
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/users/profil`);
    dispatch({
      type: "GET_PROFILE",
      payload: data.results,
    });
  };
};
