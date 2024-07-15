import { useAuth } from "@/services/auth/auth.hook";
import { LoginUser } from "@/types/user";
import { ChangeEvent, FormEvent, useState } from "react";

const userInitialState = { username: "", password: "" };
const dirtyIntialState = { username: false, password: false };

export const useLogin = () => {
  const [user, setUser] = useState<LoginUser>(userInitialState);
  const [isDirty, setIsDirty] = useState(dirtyIntialState);
  const { login } = useAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setIsDirty((prev) => ({ ...prev, [name]: value.length === 0 ? false : true }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(user);

    setUser(userInitialState);
    setIsDirty(dirtyIntialState);
  };

  const isUsernameValid = user.username.length > 3;
  const isPasswordValid = user.password.length > 3;
  const isFormValid = isUsernameValid && isPasswordValid;

  return {
    actions: { handleChange, handleSubmit },
    validators: { isUsernameValid, isPasswordValid, isFormValid },
    isDirty,
    user,
  };
};
