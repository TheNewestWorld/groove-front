import { getCommunityListQuery } from "../community";
import { BASE_URL } from "./constants";
import queryString from "query-string";

export const apiUrls = {
  user: {
    signUp: () => `${BASE_URL}/users/register`,
    getSign: () => `${BASE_URL}/users/self`,
  },
  community: {
    getCommunityList: (query: getCommunityListQuery) =>
      `${BASE_URL}/community/post${queryString.stringify(query)}`,
  },
};
