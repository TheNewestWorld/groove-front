import { useInfiniteQuery, UseInfiniteQueryOptions } from "react-query";
import {
  getWrittenPostList,
  GetWrittenPostListResponse,
} from "../../apis/myPost";

type QueryProps = { size: number; page: number };

const useWrittenPostListQuery = (
  { size, page }: QueryProps,
  options?: UseInfiniteQueryOptions<GetWrittenPostListResponse>
) => {
  const { data, ...result } = useInfiniteQuery<GetWrittenPostListResponse>(
    ["getWrittenPostList"],
    ({ pageParam = page }) => getWrittenPostList({ size, page: pageParam }),
    {
      ...options,
      getNextPageParam: ({ hasNext, page }) => (hasNext ? page + 1 : undefined),
    }
  );

  return {
    ...result,
    recordList: data?.pages.reduce(
      (acc: GetWrittenPostListResponse["contents"], list) => [
        ...acc,
        ...list.contents,
      ],
      []
    ),
  };
};

export default useWrittenPostListQuery;
