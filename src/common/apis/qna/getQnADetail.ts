import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type QnADetailQueryParams = {
  qnaId: number;
};

export type QnADetailResponse = {
  title: string;
  content: string;
  createAt: string;
  hasAnswer: boolean;
  inquiryAnswer: {
    title: string;
    content: string;
  };
  attachments: {
    id: number;
    fileType: "POST_RECORD" | "POST_IMAGE";
    uri: string;
    fileName: string;
  }[];
};

export const getQnADetail = ({ qnaId }: QnADetailQueryParams) => {
  return resultData<QnADetailResponse>(
    axios.get(apiUrls.qnas.getQnADetail(qnaId)),
  );
};
