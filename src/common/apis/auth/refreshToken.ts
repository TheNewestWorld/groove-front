import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type RefreshTokenBody = {
  refreshToken: string;
};

export type RefreshTokenResponse = {
  accessToken: string;
};

export const refreshToken = (body: RefreshTokenBody) => {
  return resultData<RefreshTokenResponse>(
    axios.post(apiUrls.auth.refreshToken(), body)
  );
};
