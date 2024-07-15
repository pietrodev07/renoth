import { useAuth } from "@/services/auth/auth.hook";
import { RegisterUser } from "@/types/user";
import { ChangeEvent, FormEvent, useState } from "react";

const userInitialState = { email: "", username: "", password: "" };
const dirtyIntialState = { email: false, username: false, password: false };

export const useRegister = () => {
  const [user, setUser] = useState<RegisterUser>(userInitialState);
  const [isDirty, setIsDirty] = useState(dirtyIntialState);
  const { register } = useAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setIsDirty((prev) => ({ ...prev, [name]: value.length < 1 ? false : true }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await register(user);

    setUser(userInitialState);
    setIsDirty(dirtyIntialState);
  };

  const isEmailValid = user.email.length > 3;
  const isUsernameValid = user.username.length > 3;
  const isPasswordValid = user.password.length > 3;
  const isFormValid = isEmailValid && isUsernameValid && isPasswordValid;

  return {
    actions: { handleChange, handleSubmit },
    validators: { isEmailValid, isUsernameValid, isPasswordValid, isFormValid },
    isDirty,
    user,
  };
};
