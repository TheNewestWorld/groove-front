import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type PostVoCBody = {
  content: string;
};

export const postVoC = (body: PostVoCBody) => {
  return resultData<null>(axios.post(apiUrls.voc.postVoC(), body));
};
