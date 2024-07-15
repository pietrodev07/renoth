import { Navbar } from "@/components/core/navbar";
import { useAuth } from "@/services/auth/auth.hook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "./components/form";

export const LoginPage = () => {
  const { isLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/dashboard", { replace: true });
    }
  }, [isLogged]);

  return (
    <>
      <Navbar />

      <main className="flex-1 flex justify-center items-center">
        <LoginForm />
      </main>
    </>
  );
};
