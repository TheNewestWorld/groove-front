import { useInfiniteQuery, UseInfiniteQueryOptions } from "react-query";
import { getRecordList, GetRecordListResponse } from "../../apis/records";

type QueryProps = { size?: number; page?: number };

const useRecordListQuery = (
  { size = 10, page = 0 }: QueryProps,
  options?: UseInfiniteQueryOptions<GetRecordListResponse>
) => {
  const { data, ...result } = useInfiniteQuery<GetRecordListResponse>(
    ["getSample"],
    ({ pageParam = page }) => getRecordList({ size, page: pageParam }),
    {
      ...options,
      getNextPageParam: ({ hasNext, page }) => (hasNext ? page + 1 : undefined),
    }
  );

  return {
    ...result,
    recordList: data?.pages.reduce(
      (acc: GetRecordListResponse["contents"], list) => [
        ...acc,
        ...list.contents,
      ],
      []
    ),
  };
};

export default useRecordListQuery;
