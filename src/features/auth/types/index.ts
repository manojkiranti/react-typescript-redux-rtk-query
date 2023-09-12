export enum ROLES {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type RoleTypes = keyof typeof ROLES;

export interface User {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  role: RoleTypes;
}

export interface UserResponse extends User {
  token: string;
}
