import { useContext } from "react";
import { UserDispatchContext } from "../store/user";

export const useUserState = () => {
  const state = useContext(UserDispatchContext);

  if (!state) {
    throw new Error("user state가 없습니다.");
  }

  return state;
};
