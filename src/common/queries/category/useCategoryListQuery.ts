import { useQuery, UseQueryOptions } from "react-query";
import { getCategoryList, GetCategoryListResponse } from "../../apis/category";

type QueryProps = {
  categoryGroup: "COMMUNITY" | "TRAINING";
};

const useCategoryListQuery = (
  { categoryGroup }: QueryProps,
  options?: UseQueryOptions<GetCategoryListResponse>
) => {
  const { data, ...result } = useQuery<GetCategoryListResponse>(
    ["getCategory", categoryGroup],
    ({}) =>
      getCategoryList({
        categoryGroup,
      }),
    {
      ...options,
    }
  );

  return {
    ...result,
    categoryList: data ?? [],
  };
};

export default useCategoryListQuery;
