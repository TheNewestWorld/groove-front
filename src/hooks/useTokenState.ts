import { useContext } from "react";
import { TokenStateContext } from "../store";

export const useTokenState = () => {
  const state = useContext(TokenStateContext);

  if (!state) {
    throw new Error("token state가 없습니다.");
  }

  return state;
};
