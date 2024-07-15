import { NavLink } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <main className="flex justify-center items-center mt-auto mb-auto">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="font-bold text-content2 text-6xl">404</h1>

        <NavLink to="/" className="btn btn-solid-primary w-fit">
          Back to home
        </NavLink>
      </div>
    </main>
  );
};
