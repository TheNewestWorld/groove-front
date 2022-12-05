import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type GetCommentListParams = {
  postId: number;
};

export type GetCommentListResponse = {
  id: number;
  userId: number;
  nickName: string;
  profileUri: string;
  content: string;
  createdAt: string;
  authority: boolean;
  parentId: number;
  taggedUsers: { userId: number; nickname: string }[];
}[];

export const getCommentList = ({ postId }: GetCommentListParams) => {
  return resultData<GetCommentListResponse>(
    axios.get(apiUrls.comment.getCommentList(postId)),
  );
};
