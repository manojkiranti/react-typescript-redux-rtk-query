import { useMemo } from "react";
import { useAppSelector } from "./reduxHook";

export const useAuth = () => {
  const user = useAppSelector((state) => state.auth.user);

  return useMemo(() => ({ user }), [user]);
};
