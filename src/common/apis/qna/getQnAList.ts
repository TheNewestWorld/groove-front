import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type QnAListQueryParams = {
  page: number;
  size: number;
};

export type QnAListResponse = {
  page: number;
  size: number;
  hasNext: boolean;
  contents: {
    id: number;
    title: string;
    content: string;
    createAt: string;
    hasAnswer: boolean;
  }[];
};

export const getQnAList = (params: QnAListQueryParams) => {
  return resultData<QnAListResponse>(
    axios.get(apiUrls.qnas.getQnAList(), { params }),
  );
};
