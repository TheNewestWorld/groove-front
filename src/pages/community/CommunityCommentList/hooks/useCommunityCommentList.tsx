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
        return {
          comment: { ...comment, canEdit: comment.authority },
          replies: [
            ...(comment.reComments.map((item) => {
              return { ...item, canEdit: item.authority };
            }) ?? undefined),
          ],
        };
      }) ?? [],
    refetch,
  };
};

export default useCommunityCommentList;
