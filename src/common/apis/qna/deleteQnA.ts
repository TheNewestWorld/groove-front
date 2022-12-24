import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type DeleteQnAParams = {
  qnaId: number;
};

export const deleteQnA = ({ qnaId }: DeleteQnAParams) => {
  return resultData<null>(axios.delete(apiUrls.qnas.deleteQnA(qnaId)));
};
