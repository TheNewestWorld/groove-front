import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type SetCommunityDislikeParams = {
  postId: number;
};

export const setCommunityDislike = ({ postId }: SetCommunityDislikeParams) => {
  return resultData<null>(
    axios.delete(apiUrls.like.setCommunityDislike(postId))
  );
};
