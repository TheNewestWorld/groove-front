import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";
import { Post } from "./type";

export type GetLikedPostListQueryParams = {
  page: number;
  size: number;
};

export type GetLikedPostListResponse = {
  page: number;
  size: number;
  hasNext: boolean;
  contents: Post[];
};

export const getLikedPostList = (params: GetLikedPostListQueryParams) => {
  return resultData<GetLikedPostListResponse>(
    axios.get(apiUrls.myPost.getLikedPostList(), { params: params })
  );
};
