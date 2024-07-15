import { useAuth } from "@/services/auth/auth.hook";
import { NavLink } from "react-router-dom";
import { IfLogged } from "../auth/if-logged";

export const Navbar = () => {
  const { logout } = useAuth();

  return (
    <header className="bg-gray-2 border border-border p-3 rounded-xl flex items-center justify-between">
      <NavLink to="/">
        <h1 className="text-xl font-bold">Renoth</h1>
      </NavLink>

      <nav className="flex gap-5">
        <IfLogged
          ifNotLogged={
            <>
              <NavLink
                to="/auth/login"
                className="btn btn-solid-primary border border-border btn-sm"
              >
                Login
              </NavLink>
              <NavLink
                to="/auth/register"
                className="btn btn-solid-secondary border border-border btn-sm"
              >
                Register
              </NavLink>
            </>
          }
        >
          <NavLink
            to="/dashboard"
            className="btn btn-solid-primary border border-border btn-sm"
          >
            Dashboard
          </NavLink>

          <button
            className="btn btn-solid-error btn-sm border border-border"
            onClick={logout}
          >
            Logout
          </button>
        </IfLogged>
      </nav>
    </header>
  );
};
