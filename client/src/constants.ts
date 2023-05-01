
export const API = {
  GET_ALL: "/api/companies",
  POST_ALL: "/api/companies",
  LOGIN: "/api/login",
  REGISTER: "/api/register",
  GET_COMPANY: (id: string | number) => {
    return `/api/companies/${id}`;
  },
};

export const URL = {
  COMPANY: (id: string | number) => {
    return `/companies/${id}`;
  },
  COMPANIES: `/companies`,
  HOME: `/`,
};

export const LS_KEYS = {
  TOKEN: "token",
  USER: "user_info",
};
