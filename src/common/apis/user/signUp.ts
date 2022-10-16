import axios from "axios";
import { resultData } from "../../configs/axios";

export type SignUpRequestBody = {
  email: string;
  password: string;
};

export const signUp = (body: SignUpRequestBody) => {
  return resultData<null>(axios.post("", body));
};
