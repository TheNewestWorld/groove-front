import { useInfiniteQuery, UseInfiniteQueryOptions } from "react-query";
import { getQnAList, QnAListResponse } from "../../apis/qna";

type QueryProps = { size?: number; page?: number };

const useQnAListQuery = (
  { size = 10, page = 0 }: QueryProps,
  options?: UseInfiniteQueryOptions<QnAListResponse>,
) => {
  const { data, ...result } = useInfiniteQuery<QnAListResponse>(
    ["getQnAList"],
    ({ pageParam = page }) => getQnAList({ size, page: pageParam }),
    {
      ...options,
      getNextPageParam: ({ hasNext, page }) => (hasNext ? page + 1 : undefined),
    },
  );

  return {
    ...result,
    qnaList: data?.pages.reduce(
      (acc: QnAListResponse["contents"], list) => [...acc, ...list.contents],
      [],
    ),
  };
};

export default useQnAListQuery;
