import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type GetUserInfoResponse = {
  id: number;
  email: string;
  type: "GROOVE" | "KAKAO" | "NAVER" | "GOOGLE";
  nickname: string;
  profileUrl: string;
  authorities: "INACTIVE" | "USER" | "TRAINER" | "ADMIN";
};

export const getUserInfo = () => {
  return resultData<GetUserInfoResponse>(
    axios.get(apiUrls.users.getUserInfo())
  );
};
