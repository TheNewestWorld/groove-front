import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";
import { GetPostResponse } from "./type";

export type GetPostListByCategoryQueryParams = {
  page: number;
  size: number;
  sortOrderType: string;
  word?: string;
  categoryId?: number;
};

export type GetPostListByCategoryResponse = {
  page: number;
  hasNext: boolean;
  contents: GetPostResponse[];
};

export const getPostListByCategory = (
  params: GetPostListByCategoryQueryParams,
) => {
  return resultData<GetPostListByCategoryResponse>(
    axios.get(apiUrls.post.getPostListByCategory(), { params: params }),
  );
};
