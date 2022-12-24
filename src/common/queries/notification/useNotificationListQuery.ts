import { useInfiniteQuery, UseInfiniteQueryOptions } from "react-query";
import {
  getNotificationList,
  GetNotificationListResponse,
} from "../../apis/notification";

type QueryProps = {
  size: number;
  page: number;
};

const useNotificationListQuery = (
  { size, page }: QueryProps,
  options?: UseInfiniteQueryOptions<GetNotificationListResponse>,
) => {
  const { data, ...result } = useInfiniteQuery<GetNotificationListResponse>(
    ["getNotificationList"],
    ({ pageParam = page }) => getNotificationList({ size, page: pageParam }),
    {
      ...options,
      getNextPageParam: ({ hasNext, page }) => (hasNext ? page + 1 : undefined),
    },
  );

  return {
    ...result,
    notificationList: data?.pages.reduce(
      (acc: GetNotificationListResponse["contents"], list) => [
        ...acc,
        ...list.contents,
      ],
      [],
    ),
  };
};

export default useNotificationListQuery;
