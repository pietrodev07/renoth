declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER_PORT: number;
      DATABASE_URL: string;
      DATABASE_HOST: string;
      DATABASE_USER: string;
      DATABASE_PASSWORD: string;
      DATABASE_PORT: number;
      FRONTEND_URL: string;
      JWT_SECRET_KEY: string;
    }
  }
}
export {};
