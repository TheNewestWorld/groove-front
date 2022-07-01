import { useContext } from "react";
import { UserDispatchContext } from "../store/user";

export const useUserDispatch = () => {
  const dispatch = useContext(UserDispatchContext);

  if (!dispatch) {
    throw new Error("user dispatch가 없습니다.");
  }

  return dispatch;
};
