import { useInfiniteQuery, UseInfiniteQueryOptions } from "react-query";
import { getLikedPostList, GetLikedPostListResponse } from "../../apis/myPost";

type QueryProps = { size: number; page: number };

const useLikedPostListQuery = (
  { size, page }: QueryProps,
  options?: UseInfiniteQueryOptions<GetLikedPostListResponse>
) => {
  const { data, ...result } = useInfiniteQuery<GetLikedPostListResponse>(
    ["getLikedPostList"],
    ({ pageParam = page }) => getLikedPostList({ size, page: pageParam }),
    {
      ...options,
      getNextPageParam: ({ hasNext, page }) => (hasNext ? page + 1 : undefined),
    }
  );

  return {
    ...result,
    recordList: data?.pages.reduce(
      (acc: GetLikedPostListResponse["contents"], list) => [
        ...acc,
        ...list.contents,
      ],
      []
    ),
  };
};

export default useLikedPostListQuery;
