import { Loading } from "@/components/core/loading";
import { router } from "@/data/routes";
import { useAuth } from "@/services/auth/auth.hook";
import { toastOptions } from "@/utils/toast";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

export const App = () => {
  const { me, isLoading } = useAuth();

  useEffect(() => {
    me();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors closeButton toastOptions={toastOptions} theme="system" />
    </>
  );
};
