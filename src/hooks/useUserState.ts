import { useContext } from "react";
import { UserStateContext } from "../store";

export const useUserState = () => {
  const state = useContext(UserStateContext);

  if (!state) {
    throw new Error("user state가 없습니다.");
  }

  return state;
};
