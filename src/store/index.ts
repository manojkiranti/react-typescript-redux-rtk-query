import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

//slices
import authSlice from "./slices/authSlice";

//apis
import { authApi } from "./apis/authApi";
import layoutSlice from "./slices/layoutSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    layout: layoutSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useLoginMutation, useLazyGetUserQuery } from "./apis/authApi";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
