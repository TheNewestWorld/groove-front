import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type getCommunityParams = {
  postId: number;
};

export type getCommunityResponse = {
  id: number;
  title: string;
  content: string;
  userId: number;
  likeFlag: boolean;
  likeCount: number;
  commentCount: number;
};

export const getCommunity = (params: getCommunityParams) => {
  return resultData<getCommunityResponse>(
    axios.get(apiUrls.community.getCommunity(params))
  );
};
