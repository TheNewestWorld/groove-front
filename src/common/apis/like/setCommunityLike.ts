import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type SetCommunityLikeParams = {
  postId: number;
};

export const setCommunityLike = ({ postId }: SetCommunityLikeParams) => {
  return resultData<null>(axios.post(apiUrls.like.setCommunityLike(postId)));
};
