import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type SignUpRequestBody = {
  email: string;
  password: string;
};

export const signUp = (body: SignUpRequestBody) => {
  return resultData<null>(axios.post(apiUrls.user.signUp(), body));
};
