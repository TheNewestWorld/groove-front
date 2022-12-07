import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export const logout = () => {
  return resultData<null>(axios.post(apiUrls.auth.logout()));
};
