import { http } from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getProfile = () => {
  return async (dispatch) => {
    const { data } = await http().get(`${URL}/users/profil`);
    dispatch({
      type: "GET_PROFILE",
      payload: data.results,
    });
  };
};
