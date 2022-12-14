import axios from "axios";

import authHeader from "./auth-header";

const API_URL = "http://localhost:5100/api/v1/";

const getOpenHouse = (id) => {
  return axios.get(API_URL + `open_houses/${id}`, { headers: authHeader() });
};

const PropertyService = {
  getOpenHouse,
};

export default PropertyService;
