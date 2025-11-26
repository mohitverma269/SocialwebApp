// import axios from 'axios';

// export const api = axios.create({
//   baseURL: 'http://192.168.10.13:3000',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });


import axios from "axios";
import { API_CONFIG } from "../config/apiConfig";

export const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});