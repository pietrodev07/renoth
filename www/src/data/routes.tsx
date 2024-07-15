import {
  DashboardPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
} from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "../components/auth/private-route";

type Router = ReturnType<typeof createBrowserRouter>;

export const router: Router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "auth/login", element: <LoginPage /> },
  { path: "auth/register", element: <RegisterPage /> },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
  },
  { path: "*", element: <NotFoundPage /> },
]);
