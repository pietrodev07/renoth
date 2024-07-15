import { RoutesData } from "@/types/index";
import { loginBodySchema } from "../schemas/login.schema";
import { registerBodySchema } from "../schemas/register.schema";

export const routes: RoutesData = {
  register: {
    method: "POST",
    path: "/register",
    validator: registerBodySchema,
  },
  login: {
    method: "POST",
    path: "/login",
    validator: loginBodySchema,
  },
  me: {
    method: "GET",
    path: "/me",
  },
  logout: {
    method: "GET",
    path: "/logout",
  },
};
