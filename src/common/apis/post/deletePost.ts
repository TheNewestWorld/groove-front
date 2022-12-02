import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type DeletePostParams = {
  postId: number;
};

export const deletePost = ({ postId }: DeletePostParams) => {
  return resultData<null>(axios.delete(apiUrls.post.deletePost(postId)));
};
