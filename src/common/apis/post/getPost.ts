import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";
import { GetPostResponse } from "./type";

export type GetPostParams = {
  postId: number;
};

export const getPost = ({ postId }: GetPostParams) => {
  return resultData<GetPostResponse>(axios.get(apiUrls.post.getPost(postId)));
};
