export interface User {
  email: string;
  username: string;
  password: string;
}

export type RegisterUser = User;
export type LoginUser = Omit<User, "email">;
