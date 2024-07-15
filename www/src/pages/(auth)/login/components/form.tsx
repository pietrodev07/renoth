import { getInputClass } from "@/utils/get-input-class";
import { useLogin } from "../hooks/use-login";

export const LoginForm = () => {
  const { actions, validators, isDirty, user } = useLogin();

  return (
    <>
      <form className="form" onSubmit={actions.handleSubmit}>
        <h1 className="title">Login</h1>

        <input
          className={getInputClass(isDirty.username, validators.isUsernameValid)}
          placeholder="Username"
          name="username"
          type="text"
          value={user.username}
          onChange={actions.handleChange}
          aria-label="Username"
        />

        <input
          className={getInputClass(isDirty.password, validators.isPasswordValid)}
          placeholder="Password"
          name="password"
          type="password"
          value={user.password}
          onChange={actions.handleChange}
          aria-label="Password"
        />

        <button
          className="btn btn-solid-primary"
          type="submit"
          disabled={!validators.isFormValid}
          aria-disabled={!validators.isFormValid}
        >
          Login
        </button>
      </form>
    </>
  );
};
