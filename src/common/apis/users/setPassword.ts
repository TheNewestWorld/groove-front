import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type SetPasswordBody = {
  sessionKey: string;
  password: string;
};

export const setPassword = (body: SetPasswordBody) => {
  return resultData<null>(axios.put(apiUrls.users.setPassword(), body));
};
