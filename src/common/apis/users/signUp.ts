import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type SignUpBody = {
  email: string;
  password: string;
  nickname: string;
};

export const signUp = (body: SignUpBody) => {
  return resultData<null>(axios.post(apiUrls.users.signUp(), body));
};
