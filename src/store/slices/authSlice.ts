import { User } from "@/features/auth";
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/authApi";
import storage from "@/utils/storage";

export interface AuthState {
  user: User | null;
  token: string | null;
}
const initialAuthState: AuthState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    resetLogin: () => {},
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { username, firstName, lastName, id, email, role } = payload;
        storage.setToken(payload.token);
        state.token = payload.token;
        state.user = { id, email, username, firstName, lastName, role };
      }
    );
  },
});

export const { resetLogin } = authSlice.actions;
export default authSlice.reducer;
