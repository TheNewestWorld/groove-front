import useCommentListQuery from "../../../../common/queries/comment/useCommentListQuery";

type Props = { communityId: number };

const useCommunityCommentList = ({ communityId }: Props) => {
  const {
    isLoading,
    isError,
    data: commentList,
    refetch,
  } = useCommentListQuery(
    {
      postId: communityId,
    },
    {
      enabled: !!communityId,
    }
  );

  return {
    isLoading,
    isError,
    comments:
      commentList?.map((comment) => {
        return { comment: { ...comment }, replies: comment.reComments };
      }) ?? [],
    refetch,
  };
};

export default useCommunityCommentList;
