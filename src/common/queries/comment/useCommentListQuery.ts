import { useQuery, UseQueryOptions } from "react-query";
import { getCommentList, GetCommentListResponse } from "../../apis/comment";

type QueryProps = {
  postId: number;
};

const useCommentListQuery = (
  { postId }: QueryProps,
  options?: UseQueryOptions<GetCommentListResponse>,
) => {
  const { isLoading, isError, data } = useQuery<GetCommentListResponse>(
    ["getCommentList", postId],
    () => getCommentList({ postId }),
    options,
  );

  return { isLoading, isError, commentList: data };
};

export default useCommentListQuery;