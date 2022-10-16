import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export const getUser = () => {
  return resultData<null>(axios.get(apiUrls.user.getSign()));
};
