import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type GetNoticeDetailQueryParams = {
  noticeId: number;
};

export type GetNoticeDetailResponse = {
  title: string;
  content: string;
  createdAt: string;
};

export const getNoticeDetail = ({ noticeId }: GetNoticeDetailQueryParams) => {
  return resultData<GetNoticeDetailResponse>(
    axios.get(apiUrls.notices.getNoticeDetail(noticeId))
  );
};
