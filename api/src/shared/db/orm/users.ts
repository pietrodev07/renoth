import { mainDB } from "@/db/db";
import { NewUser, UserUpdate } from "@/db/tables";

type Key = "id" | "username" | "email";

export const get = async (key: Key, value: string) => {
  return await mainDB
    .selectFrom("users")
    .where(key, "=", value)
    .selectAll()
    .executeTakeFirst();
};

export const create = async (user: NewUser) => {
  return await mainDB
    .insertInto("users")
    .values(user)
    .returningAll()
    .executeTakeFirst();
};

export const edit = async (id: string, user: UserUpdate) => {
  return await mainDB
    .updateTable("users")
    .set(user)
    .where("id", "=", id)
    .returningAll()
    .executeTakeFirst();
};

export const remove = async (id: string) => {
  return await mainDB
    .deleteFrom("users")
    .where("id", "=", id)
    .returningAll()
    .executeTakeFirst();
};
