import { Context } from "hono";

import { users } from "@/db/orm";
import { hash } from "@/utils/bcrypt";
import { RegisterBody } from "../schemas/register.schema";

export const register = async (c: Context) => {
  const { email, username, password } = await c.req.json<RegisterBody>();

  const isUsernameExist = await users.get("username", username);
  const isEmailExist = await users.get("email", username);

  if (isUsernameExist || isEmailExist) {
    return c.json({
      succes: false,
      message: "User with given email/username already exist!",
    });
  }

  await users.create({
    username,
    email,
    password: hash(password),
  });

  return c.json({
    success: true,
    message: "Registration completed successfully!",
  });
};
