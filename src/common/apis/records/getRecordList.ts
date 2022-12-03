import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type GetRecordListQueryParams = {
  page: number;
  size: number;
};

export type GetRecordListResponse = {
  page: number;
  size: number;
  hasNext: boolean;
  contents: {
    recordId: number;
    fileUri: string;
    recordName: string;
    createdAt: string;
  }[];
};

export const getRecordList = (params: GetRecordListQueryParams) => {
  return resultData<GetRecordListResponse>(
    axios.get(apiUrls.records.getRecordList(), { params })
  );
};
