import { UserResponse } from "@/features/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// For test purposes only
const user: UserResponse = {
  id: 1,
  email: "admin@admin.com",
  username: "admin",
  firstName: "Admin",
  lastName: "User",
  role: "ADMIN",
  token:
    "3yJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI",
};

export interface LoginRequest {
  username: string;
  password: string;
}

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/users",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "",
        method: "POST",
        body: credentials,
      }),
      // For test purposes only
      transformResponse: () => user,
    }),
    getUser: builder.query<any, number>({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useLoginMutation, useLazyGetUserQuery } = authApi;
export { authApi };
