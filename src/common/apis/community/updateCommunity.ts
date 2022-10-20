import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type updateCommunityParams = {
  postId: number;
};

export type updateCommunityBody = {
  title: string;
  content: string;
  categoryId: number;
};

export const updateCommunity = ({
  postId,
  ...community
}: updateCommunityParams & updateCommunityBody) => {
  return resultData<null>(
    axios.post(apiUrls.community.updateCommunity({ postId }), community)
  );
};
