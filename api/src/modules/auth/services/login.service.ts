import { Context } from "hono";

import { users } from "@/db/orm";
import { compare } from "@/utils/bcrypt";
import { generateToken } from "@/utils/jwt";
import { RegisterBody } from "../schemas/register.schema";
import { setCookie } from "hono/cookie";

export const login = async (c: Context) => {
  const { username, password } = await c.req.json<RegisterBody>();

  const fetchedUser = await users.get("username", username);
  if (!fetchedUser) {
    return c.json({
      success: false,
      message: "User with given username does not exist!",
    });
  }

  const passwordMatch = compare(fetchedUser.password, password);
  if (!passwordMatch) {
    return c.json({
      success: false,
      message: "Password given is not valid for this username!",
    });
  }

  const accessToken = await generateToken(3600, { username });

  setCookie(c, "access_token", accessToken, {
    path: "/",
    secure: true,
    httpOnly: true,
    maxAge: 3600,
  });

  return c.json({
    success: true,
    message: "Login completed successfully!",
    data: { accessToken },
  });
};
