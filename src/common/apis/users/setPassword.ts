import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type SetPasswordBody = {
  email: string;
};

export const setPassword = (body: SetPasswordBody) => {
  return resultData<null>(axios.post(apiUrls.users.setPassword()), body);
};
