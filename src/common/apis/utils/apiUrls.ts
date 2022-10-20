import { getCommunityListQuery } from "../community";
import { BASE_URL } from "./constants";
import queryString from "query-string";

type communityParams = { postId: number };

export const apiUrls = {
  user: {
    signUp: () => `${BASE_URL}/users/register`,
    getSign: () => `${BASE_URL}/users/self`,
  },
  community: {
    getCommunityList: (query: getCommunityListQuery) =>
      `${BASE_URL}/community/post${queryString.stringify(query)}`,
    getCommunity: ({ postId }: communityParams) =>
      `${BASE_URL}/community/post/${postId}`,
    updateCommunity: ({ postId }: communityParams) =>
      `${BASE_URL}/community/post/${postId}`,
  },
};
