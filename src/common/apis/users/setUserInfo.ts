import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type SetUserInfoBody = {
  nickname: string;
};

export const setUserInfo = (body: SetUserInfoBody) => {
  return resultData<null>(axios.put(apiUrls.users.setUserInfo(), body));
};
