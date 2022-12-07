import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type GetUserInfoResponse = {
  id: number;
  email: string;
  providerType: "GROOVE" | "KAKAO" | "NAVER" | "GOOGLE";
  nickname: string;
  profileUri: string;
  role: "INACTIVE" | "USER" | "TRAINER" | "ADMIN";
};

export const getUserInfo = () => {
  return resultData<GetUserInfoResponse>(
    axios.get(apiUrls.users.getUserInfo())
  );
};
