import axios from "axios";

import authHeader from "./auth-header";

const API_URL = "http://localhost:5100/api/v1/";

const getPublic = () => {
  return axios.get(API_URL + "all");
};

const getUser = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getAdmin = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const UserService = {
  getPublic,
  getUser,
  getAdmin,
};

export default UserService;
