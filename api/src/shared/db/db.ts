import { Pool } from "pg";
import { CamelCasePlugin, Kysely, PostgresDialect } from "kysely";

import { Database } from "./tables";
import { clusterConfig } from "@/config/*";

export const createDialect = (database: string) => {
  return new PostgresDialect({
    pool: new Pool({
      database,
      host: clusterConfig.host,
      user: clusterConfig.user,
      password: clusterConfig.password,
      port: clusterConfig.port,
    }),
  });
};

export const connectDB = <D>(dbName: string) => {
  return new Kysely<D>({
    dialect: createDialect(dbName),
    plugins: [new CamelCasePlugin()],
  });
};

export const mainDB = connectDB<Database>("auth-system");
