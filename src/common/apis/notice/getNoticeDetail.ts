import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type NoticeDetailQueryParams = {
  noticeId: number;
};

export type NoticeDetailResponse = {
  title: string;
  content: string;
  createdAt: string;
};

export const getNoticeDetail = ({ noticeId }: NoticeDetailQueryParams) => {
  return resultData<NoticeDetailResponse>(
    axios.get(apiUrls.notices.getNoticeDetail(noticeId))
  );
};
