import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type DeleteCommentParams = {
  commentId: number;
};

export const deleteComment = ({ commentId }: DeleteCommentParams) => {
  return resultData<null>(
    axios.delete(apiUrls.comment.deleteComment(commentId)),
  );
};
