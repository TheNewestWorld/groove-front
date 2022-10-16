import axios from "axios";
import { resultData } from "../../configs/axios";

export type SignUpRequestBody = {
  email: string;
  password: string;
};

export const signUp = (body: SignUpRequestBody) => {
  // TODO: 요청 url 작성
  return resultData<null>(axios.post("", body));
};
