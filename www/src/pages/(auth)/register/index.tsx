import { Navbar } from "@/components/core/navbar";
import { RegisterForm } from "./components/form";

export const RegisterPage = () => {
  return (
    <>
      <Navbar />

      <main className="flex-1 flex justify-center items-center">
        <RegisterForm />
      </main>
    </>
  );
};
