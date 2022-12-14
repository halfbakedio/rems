import axios from "axios";

const API_URL = "http://localhost:5100/api/v1/users/";

const register = (username, email, password) => {
  return axios.post(API_URL, {
    username,
    email,
    password,
  });
};

const login = async (email, password) => {
  return axios
    .post(
      API_URL + "login",
      {
        user: {
          email,
          password,
        },
      },
    )
    .then((response) => {
      if (response.data.user.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
