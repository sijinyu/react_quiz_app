
import axios from "axios";
import { constant } from "../../constants";

const baseURL = constant.getBaseUrl();

const api = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});


export default api;
