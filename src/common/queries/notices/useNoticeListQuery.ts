import { useInfiniteQuery, UseInfiniteQueryOptions } from "react-query";
import { getNoticeList, NoticeListResponse } from "../../apis/notice";

type QueryProps = { size?: number; page?: number };

const useNoticeListQuery = (
  { size = 10, page = 0 }: QueryProps,
  options?: UseInfiniteQueryOptions<NoticeListResponse>
) => {
  const { data, ...result } = useInfiniteQuery<NoticeListResponse>(
    ["getNoticeList"],
    ({ pageParam = page }) => getNoticeList({ size, page: pageParam }),
    {
      ...options,
      getNextPageParam: ({ hasNext, page }) => (hasNext ? page + 1 : undefined),
    }
  );

  return {
    ...result,
    noticeList: data?.pages.reduce(
      (acc: NoticeListResponse["contents"], list) => [...acc, ...list.contents],
      []
    ),
  };
};

export default useNoticeListQuery;
