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

  const commentList =
    data &&
    data
      .filter(comment => comment.id === comment.parentId)
      .map(comment => {
        const replies = data.filter(reply => reply.id === comment.id);
        return {
          comment: comment,
          replies: replies,
        };
      });

  return { isLoading, isError, commentList };
};

export default useCommentListQuery;