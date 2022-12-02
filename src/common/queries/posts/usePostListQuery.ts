import { useInfiniteQuery, UseInfiniteQueryOptions } from "react-query";
import {
  getPostListByCategory,
  GetPostListByCategoryResponse,
} from "../../apis/post";

type QueryProps = {
  size: number;
  page: number;
  sortOrderType: "CREATED_AT" | "LIKE_COUNT" | "COMMENT_COUNT";
  word?: string;
  categoryId?: number;
};

const usePostListByCategoryQuery = (
  { size, page, sortOrderType, word, categoryId }: QueryProps,
  options?: UseInfiniteQueryOptions<GetPostListByCategoryResponse>,
) => {
  const { data, ...result } = useInfiniteQuery<GetPostListByCategoryResponse>(
    ["getPost", sortOrderType, word, categoryId],
    ({ pageParam = page }) =>
      getPostListByCategory({
        size,
        page: pageParam,
        sortOrderType,
        word,
        categoryId,
      }),
    {
      ...options,
      getNextPageParam: ({ hasNext, page }) => (hasNext ? page + 1 : undefined),
    },
  );

  return {
    ...result,
    postList: data?.pages.reduce(
      (acc: GetPostListByCategoryResponse["contents"], list) => [
        ...acc,
        ...list.contents,
      ],
      [],
    ),
  };
};

export default usePostListByCategoryQuery;
