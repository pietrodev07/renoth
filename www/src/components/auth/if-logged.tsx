import { useAuth } from "@/services/auth/auth.hook";
import { PropsWithChildren, ReactNode } from "react";

interface IfLoggedProps extends PropsWithChildren {
  ifNotLogged: ReactNode;
}

export const IfLogged = ({ children, ifNotLogged }: IfLoggedProps) => {
  const { isLogged } = useAuth();

  return <>{isLogged ? children : ifNotLogged}</>;
};
