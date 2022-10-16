import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

// TODO: nullable 여부 확인
export type getCommunityListQuery = {
  page: number; // 0 ~
  size: number; // 1 ~
  sort: string[]; // TODO: 상수로 전환
};

export type getCommunityListResponse = {
  id: number;
  title: string;
  content: string;
  userId: number;
  likeFlag: boolean;
  likeCount: number;
  commentCount: number;
}[];

export const getCommunityList = (query: getCommunityListQuery) => {
  return resultData<getCommunityListResponse>(
    axios.get(apiUrls.community.getCommunityList(query))
  );
};
