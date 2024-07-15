import { renderToast } from "@/utils/toast";
import { create } from "zustand";
import * as authService from "./auth.api";
import { AuthState } from "./auth.model";

export const useAuth = create<AuthState>((set) => {
  return {
    isLogged: false,
    isLoading: true,
    login: async (user) => {
      const res = await authService.login(user);
      res.success && set({ isLogged: true });
      renderToast(res.success, res.message);
    },
    register: async (user) => {
      const res = await authService.register(user);
      renderToast(res.success, res.message);
    },
    logout: async () => {
      const res = await authService.logout();
      res.success && set({ isLogged: false });
      renderToast(res.success, res.message);
    },
    me: async () => {
      const res = await authService.me();
      res.success && set({ isLogged: true });
      set({ isLoading: false });
    },
  };
});
