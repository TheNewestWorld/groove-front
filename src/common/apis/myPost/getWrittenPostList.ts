import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";
import { Post } from "./type";

export type GetWrittenPostListQueryParams = {
  page: number;
  size: number;
};

export type GetWrittenPostListResponse = {
  page: number;
  size: number;
  hasNext: boolean;
  contents: Post[];
};

export const getWrittenPostList = (params: GetWrittenPostListQueryParams) => {
  return resultData<GetWrittenPostListResponse>(
    axios.get(apiUrls.myPost.getWrittenPostList(), { params: params })
  );
};
