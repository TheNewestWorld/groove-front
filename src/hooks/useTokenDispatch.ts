import { useContext } from "react";
import { TokenDispatchContext } from "../store";

export const useTokenDispatch = () => {
  const dispatch = useContext(TokenDispatchContext);

  if (!dispatch) {
    throw new Error("token dispatch가 없습니다.");
  }

  return dispatch;
};
