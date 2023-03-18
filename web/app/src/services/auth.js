import axios from "axios";

import { API_V1_URL } from "@/environment";

const register = (username, email, password) => {
  const endpoint = [API_V1_URL, "users"].join("/");

  return axios.post(
    endpoint,
    {
      username,
      email,
      password,
    },
  );
};

const login = async (email, password) => {
  const endpoint = [API_V1_URL, "users", "login"].join("/");

  return axios
    .post(
      endpoint,
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
  const data = localStorage.getItem("user");

  if (!data || data == "undefined") {
    return undefined;
  }

  return JSON.parse(data);
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
