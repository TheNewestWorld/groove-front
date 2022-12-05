import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type UpdateCommentParams = {
  commentId: number;
};

export type UpdateCommentBody = {
  content: string;
};

export const updateComment = (
  { commentId }: UpdateCommentParams,
  body: UpdateCommentBody,
) => {
  return resultData<null>(
    axios.put(apiUrls.comment.updateComment(commentId), body, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
  );
};
