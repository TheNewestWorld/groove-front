import { useInfiniteQuery, UseInfiniteQueryOptions } from "react-query";
import { getCategoryList, GetCategoryListResponse } from "../../apis/category";

type QueryProps = {
  categoryGroup: "COMMUNITY" | "TRAINING";
};

const useCategoryListQuery = (
  { categoryGroup }: QueryProps,
  options?: UseInfiniteQueryOptions<GetCategoryListResponse>,
) => {
  const { data, ...result } = useInfiniteQuery<GetCategoryListResponse>(
    ["getCategory", categoryGroup],
    ({}) =>
      getCategoryList({
        categoryGroup,
      }),
    {
      ...options,
    },
  );

  return {
    ...result,
    categoryList: data?.pages.reduce(
      (acc: GetCategoryListResponse, list) => [...acc, ...list],
      [],
    ),
  };
};

export default useCategoryListQuery;
