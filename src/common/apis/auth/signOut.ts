import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export const signOut = () => {
  return resultData<null>(axios.post(apiUrls.auth.signOut()));
};
