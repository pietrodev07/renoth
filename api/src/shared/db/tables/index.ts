import { UsersTable } from "./users.table";

export interface Database {
  users: UsersTable;
}

export * from "./users.table";
