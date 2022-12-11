import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type PostQnaBody = {
  title: string;
  content: string;
  image: File | null;
}

export const postQna = (body: PostQnaBody) => {
  return resultData<null>(axios.post(apiUrls.qna.postQna(), body));
};
