import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type NoticeListQueryParams = {
  page: number;
  size: number;
};

export type NoticeListResponse = {
  page: number;
  size: number;
  hasNext: boolean;
  contents: { title: string; content: string; createdAt: string }[];
};

export const getNoticeList = (params: NoticeListQueryParams) => {
  return resultData<NoticeListResponse>(
    axios.get(apiUrls.notices.getNoticeList(), { params: params })
  );
};
