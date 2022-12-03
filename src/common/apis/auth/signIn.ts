import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type SignInBody = {
  email: string;
  password: string;
};

export type SignInResponse = {
  accessToken: string;
  refreshToken: string;
};

export const signIn = (body: SignInBody) => {
  return resultData<SignInResponse>(
    axios.post(apiUrls.auth.signIn(), body)
  ).then((res) => {
    localStorage.setItem("accessToken", res.accessToken);
    localStorage.setItem("refreshToken", res.refreshToken);
    axios.defaults.headers["Authorization"] = res.accessToken;
    return res;
  });
};
