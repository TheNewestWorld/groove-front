import { useQuery, UseQueryOptions } from "react-query";
import { getCommentList, GetCommentListResponse } from "../../apis/comment";

type QueryProps = {
  postId: number;
};

const useCommentListQuery = (
  { postId }: QueryProps,
  options?: UseQueryOptions<GetCommentListResponse>,
) => {
  const result = useQuery<GetCommentListResponse>(
    ["getCommentList", postId],
    () => getCommentList({ postId }),
    options
  );

  return result;
};

export default useCommentListQuery;
