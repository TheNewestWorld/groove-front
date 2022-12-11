import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type ActiveUserPaths = {
  sessionKey: string;
};

export const activeUser = ({ sessionKey }: ActiveUserPaths) => {
  return resultData<null>(axios.post(apiUrls.auth.activeUser(sessionKey)));
};
