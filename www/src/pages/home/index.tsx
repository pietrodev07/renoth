import { Navbar } from "@/components/core/navbar";
import { useAuth } from "@/services/auth/auth.hook";
import clsx from "clsx";

export const HomePage = () => {
  const { isLogged } = useAuth();

  return (
    <>
      <Navbar />

      <main className="flex-1 flex items-center justify-center">
        <h1 className={clsx("title", isLogged ? "text-success" : "text-error")}>
          {isLogged ? "logged" : "not logged"}
        </h1>
      </main>
    </>
  );
};
