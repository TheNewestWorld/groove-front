import { useState } from "react";
import useCommentListQuery from "../../../../common/queries/comment/useCommentListQuery";
import { Props as CommentType } from "../CommunityCommentList.view";

type Props = { communityId: number };

const useCommunityCommentList = ({ communityId }: Props) => {
  const [comments, setComments] = useState<CommentType["comments"]>([]);

  const { isLoading, isError, refetch } = useCommentListQuery(
    {
      postId: communityId,
    },
    {
      enabled: !!communityId,
      onSuccess: (commentList) => {
        let comments: CommentType["comments"] = [];

        commentList.forEach((comment) => {
          if (comment.parentId === 0) {
            comments.push({
              comment: { ...comment },
              replies: [],
            });
          } else {
            comments = comments.map((item) => {
              if (item.comment.id === comment.parentId) {
                return {
                  ...item,
                  replies: [...item.replies, comment],
                };
              } else {
                return item;
              }
            });
          }
        });

        setComments(comments);
      },
    }
  );

  return { isLoading, isError, comments, refetch };
};

export default useCommunityCommentList;
