import axios from "axios";
import { resultData } from "../../configs/axios";

export const getUser = () => {
  // TODO: 요청 url 작성
  return resultData<null>(axios.get(""));
};
