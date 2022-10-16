import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type getCommunityListResponse = {
  id: number;
  title: string;
  content: string;
  userId: number;
  likeFlag: boolean;
  likeCount: number;
  commentCount: number;
}[];

export const getCommunityList = () => {
  return resultData<getCommunityListResponse>(
    axios.get(apiUrls.community.getCommunityList())
  );
};
