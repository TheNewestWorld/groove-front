import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type PostCommentParams = {
  postId: number;
};

export type PostCommentBody = {
  content: string;
  parentId: number;
};

export const postComment = (
  { postId }: PostCommentParams,
  body: PostCommentBody,
) => {
  return resultData<null>(
    axios.post(apiUrls.comment.postComment(postId), body),
  );
};
