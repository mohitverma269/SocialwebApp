import { api } from "../utils/axiosClient";
import { API_CONFIG } from "../config/apiConfig";

export const loginApi = (data: { email: string; password: string }) => {
  return api.post(API_CONFIG.AUTH.LOGIN, data).then((res) => res.data);
};

export const registerApi = (data: FormData) => {
  return api.post(API_CONFIG.AUTH.REGISTER, data, {
    headers: {
      "Content-Type": "multipart/form-data"
    },
  }).then((res) => res.data);
};