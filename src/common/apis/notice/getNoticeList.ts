import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type GetNoticeListQueryParams = {
  page: number;
  size: number;
};

export type GetNoticeListResponse = {
  page: number;
  size: number;
  hasNext: boolean;
  contents: { title: string; content: string; createdAt: string }[];
};

export const getNoticeList = (params: GetNoticeListQueryParams) => {
  return resultData<GetNoticeListResponse>(
    axios.get(apiUrls.notices.getNoticeList(), { params: params })
  );
};
