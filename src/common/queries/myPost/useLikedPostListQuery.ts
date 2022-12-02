import { useInfiniteQuery, UseInfiniteQueryOptions } from "react-query";
import { getLikedPostList, GetLikedPostListResponse } from "../../apis/myPost";

type QueryProps = { size?: number; page?: number };

const useLikedPostListQuery = (
  { size = 10, page = 0 }: QueryProps,
  options?: UseInfiniteQueryOptions<GetLikedPostListResponse>
) => {
  // TODO: 페이지 끝에 도달 시 추가 요청 로직 작성
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
    likedList: data?.pages.reduce(
      (acc: GetLikedPostListResponse["contents"], list) => [
        ...acc,
        ...list.contents,
      ],
      []
    ),
  };
};

export default useLikedPostListQuery;
