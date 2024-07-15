import { getInputClass } from "@/utils/get-input-class";
import { useRegister } from "../hooks/use-register";

export const RegisterForm = () => {
  const { actions, validators, isDirty, user } = useRegister();

  return (
    <form className="form" onSubmit={actions.handleSubmit}>
      <h1 className="title">Register</h1>

      <input
        className={getInputClass(isDirty.email, validators.isEmailValid)}
        placeholder="Email"
        name="email"
        type="email"
        value={user.email}
        onChange={actions.handleChange}
        aria-label="Email"
      />

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
        Register
      </button>
    </form>
  );
};
