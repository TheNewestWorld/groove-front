import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

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
  contents: {
    id: number;
    title: string;
    content: string;
    userId: number;
    nickname: string;
    profileUri: string;
    likeFlag: boolean;
    likeCount: number;
    commentCount: number;
    categoryId: number;
    authority: boolean;
    attachmentUris: {
      id: number;
      type: "IMAGE" | "RECORD";
      src: string;
      title: string;
    }[];
  }[];
};

export const getPostListByCategory = (
  params: GetPostListByCategoryQueryParams,
) => {
  return resultData<GetPostListByCategoryResponse>(
    axios.get(apiUrls.post.getPostListByCategory(), { params: params }),
  );
};
