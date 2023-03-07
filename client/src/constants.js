export const API = {
  GET_ALL: "/api/companies",
  POST_ALL: "/api/companies",
  LOGIN: "/api/login",
  GET_COMPANY: (id) => {
    return `/api/companies/${id}`;
  },
};

export const URL = {
  COMPANY: (id) => {
    return `/companies/${id}`;
  },
  COMPANIES: `/companies`,
  HOME: `/`,
};

export const LS_KEYS = {
  TOKEN: "token",
  USER: "user_info",
};
