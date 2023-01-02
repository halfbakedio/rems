import axios from "axios";

import authHeader from "./auth-header";

const API_URL = "http://localhost:5100/api/v1";

const getOpenHouse = (id) => {
  const headers = authHeader();
  return axios.get(`${API_URL}/open_houses/${id}`, { headers });
};

const getOpenHouses = () => {
  const headers = authHeader();
  return axios.get(`${API_URL}/open_houses/`, { headers });
};

const PropertyService = {
  getOpenHouse,
  getOpenHouses,
};

export default PropertyService;
