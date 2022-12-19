import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type GetCommentListParams = {
  postId: number;
};

export type GetCommentListResponse = {
  id: number;
  createdAt: string;
  content: string;
  parentId: number;
  userId: number;
  nickName: string;
  profileUri: string;
  postId: number;
  authority: boolean;
}[];

export const getCommentList = ({ postId }: GetCommentListParams) => {
  return resultData<GetCommentListResponse>(
    axios.get(apiUrls.comment.getCommentList(postId)),
  );
};
