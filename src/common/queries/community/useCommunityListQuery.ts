import { useQuery, UseQueryOptions } from "react-query";
import {
  getCommunityList,
  getCommunityListQuery,
  getCommunityListResponse,
} from "../../apis/community";

export const useCommunityListQuery = (
  query: getCommunityListQuery,
  options?: UseQueryOptions<getCommunityListResponse>
) => {
  // TODO: infinityQuery로 수정
  const result = useQuery<getCommunityListResponse>(
    ["getCommunityList"],
    () => getCommunityList(query),
    options
  );

  return { ...result };
};
