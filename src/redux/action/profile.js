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

export const updateProfile = (dataUpdate, token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).put(`${URL}/users/profil`, dataUpdate);
      dispatch({
        type: "UPDATE_PROFILE",
        payload: data.results,
      });
    } catch (err) {
      dispatch({
        type: "UPDATE_PROFILE_FAILED",
        payload: err.response.data.message, //error from axios
      });
    }
  };
};
