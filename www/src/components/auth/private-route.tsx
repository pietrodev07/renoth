import { useAuth } from "@/services/auth/auth.hook";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { isLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      return navigate("/auth/login", { replace: true });
    }
  }, [isLogged]);

  return children;
};
