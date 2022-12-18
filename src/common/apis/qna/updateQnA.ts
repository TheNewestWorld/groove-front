import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type UpdateQnAParams = {
  qnaId: number;
};

export type UpdateQnABody = {
  title: string;
  content: string;
};

export const UpdateQnA = ({ qnaId }: UpdateQnAParams, body: UpdateQnABody) => {
  return resultData<null>(axios.put(apiUrls.qnas.updateQnA(qnaId), body));
};
