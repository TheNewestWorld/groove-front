import { useInfiniteQuery, UseInfiniteQueryOptions } from "react-query";
import {
  getWrittenPostList,
  GetWrittenPostListResponse,
} from "../../apis/myPost";

type QueryProps = { size?: number; page?: number };

const useWrittenPostListQuery = (
  { size = 10, page = 0 }: QueryProps,
  options?: UseInfiniteQueryOptions<GetWrittenPostListResponse>
) => {
  // TODO: 페이지 끝에 도달 시 추가 요청 로직 작성
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
    writtenList: data?.pages.reduce(
      (acc: GetWrittenPostListResponse["contents"], list) => [
        ...acc,
        ...list.contents,
      ],
      []
    ),
  };
};

export default useWrittenPostListQuery;
