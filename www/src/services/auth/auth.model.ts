import { LoginUser, RegisterUser } from "@/types/user";

export interface AuthState {
  isLogged: boolean;
  isLoading: boolean;
  login: (user: LoginUser) => Promise<void>;
  register: (user: RegisterUser) => Promise<void>;
  logout: () => Promise<void>;
  me: () => Promise<void>;
}
