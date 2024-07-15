import { login } from "../services/login.service";
import { logout } from "../services/logout.service";
import { me } from "../services/me.service";
import { register } from "../services/register.service";

export const authController = {
  login,
  register,
  logout,
  me,
};
