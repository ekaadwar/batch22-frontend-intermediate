import { http } from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const toggleAuth = () => {
  return {
    type: "AUTH_TOGGLE",
  };
};

export const clearAuth = () => {
  return {
    type: "CLEAR_AUTH_TOGGLE",
  };
};

export const authLogin = (email, password) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    form.append("email", email);
    form.append("password", password);
    try {
      const { data } = await http().post(`${URL}/auth/login`, form.toString());
      dispatch({
        type: "AUTH_LOGIN",
        payload: {
          userId: data.results.UserId,
          token: data.results.token,
        },
      });
    } catch (err) {
      dispatch({
        type: "AUTH_LOGIN_FAILED",
        payload: err.response.data.message, //error from axios
      });
    }
  };
};

export const clearAuthMsg = () => {
  return {
    type: "CLEAR_AUTH_MESSAGE",
  };
};

export const authLogout = () => ({
  type: "AUTH_LOGOUT",
});
