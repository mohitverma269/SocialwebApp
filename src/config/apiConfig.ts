export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL,

  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    PROFILE: "/auth/profile",
  },

  // USER: {
  //   GET_ALL: "/users",
  //   UPDATE: "/users/update",
  // },

  // PRODUCTS: {
  //   LIST: "/products",
  //   SINGLE: (id: string) => `/products/${id}`,
  // }
};
