import { api, AUTH_URL, generateUrl } from "@/api/index";
import { Response } from "@/types";
import { LoginUser, RegisterUser } from "@/types/user";

export const login = async (user: LoginUser) => {
  const url = generateUrl(AUTH_URL, "/login");
  const res = await api.post(url, user);
  return res as Response<null>;
};

export const register = async (user: RegisterUser) => {
  const url = generateUrl(AUTH_URL, "/register");
  const res = await api.post(url, user);
  return res as Response<null>;
};

export const logout = async () => {
  const url = generateUrl(AUTH_URL, "/logout");
  const res = await api.get(url);
  return res as Response<null>;
};

export const me = async () => {
  const url = generateUrl(AUTH_URL, "/me");
  const res = await api.get(url);
  return res as Response<null>;
};
