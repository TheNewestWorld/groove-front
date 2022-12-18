import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type QnAListQueryParams = {
  page: number;
  size: number;
};

// TODO: 서버와 인터페이스 맞추는 작업이 필요합니다.
export type QnAListResponse = {
  page: number;
  size: number;
  hasNext: boolean;
  contents: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    hasAnswer: boolean;
    answerTitle: string;
    answerContent: string;
  }[];
};

export const getQnAList = (params: QnAListQueryParams) => {
  return resultData<QnAListResponse>(
    axios.get(apiUrls.qnas.getQnAList(), { params }),
  );
};
