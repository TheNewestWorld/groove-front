import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type QnADetailQueryParams = {
  qnaId: number;
};

// TODO: 서버와 인터페이스 맞추는 작업이 필요합니다.
export type QnADetailResponse = {
  title: string;
  content: string;
  createdAt: string;
  hasAnswer: boolean;
  answerTitle: string;
  answerContent: string;
};

export const getQnADetail = ({ qnaId }: QnADetailQueryParams) => {
  return resultData<QnADetailResponse>(
    axios.get(apiUrls.qnas.getQnADetail(qnaId)),
  );
};
