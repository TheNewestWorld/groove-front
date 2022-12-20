import { useNavigate, useParams } from "react-router-dom";
import {
  setCommunityDislike,
  setCommunityLike,
} from "../../../common/apis/like";
import { deletePost } from "../../../common/apis/post";
import { postReport } from "../../../common/apis/reports";
import BuildPaths from "../../../common/paths";
import usePostDetailQuery from "../../../common/queries/posts/usePostDetailQuery";
import Error from "../../../components/Error";
import Loading from "../../../components/Loading";
import CommunityDetailView from "./CommunityDetail.view";

const CommunityDetail = () => {
  const navigation = useNavigate();
  const { communityId } = useParams<{ communityId: string }>();

  const { isLoading, isError, post, refetch } = usePostDetailQuery(
    {
      postId: Number(communityId),
    },
    {
      enabled: !!communityId,
    }
  );

  if (isLoading || !post) {
    return <Loading />;
  }

  if (isError || !communityId) {
    return <Error />;
  }

  return (
    <CommunityDetailView
      community={{
        id: Number(communityId),
        title: post.title!,
        profileImage: post.profileUri!,
        nickname: post.nickName!,
        date: new Date(post.createdAt!),
        content: post.content!,
        imageList: post.imageList,
        audio: post.audio!,
        likeCount: post.likeCount!,
        liked: post.likeFlag,
        commentCount: post.commentCount!,
        hasAuthority: post.authority,
      }}
      onClickBack={() => navigation(-1)}
      onClickModify={() => navigation(BuildPaths.communityEdit(communityId))}
      onClickDelete={() => {
        deletePost({ postId: Number(communityId) });
        navigation(-1);
      }}
      onClickReport={(
        reason:
          | "HARSH_PROFANITY"
          | "FALSE_INFORMATION"
          | "INAPPROPRIATE_CONTENT"
      ) => {
        postReport({
          postId: Number(communityId),
          reportTargetType: "POST",
          reportReasonType: reason,
        });
      }}
      onClickLike={(postId) => {
        post.likeFlag
          ? setCommunityDislike({ postId }).then(() => refetch())
          : setCommunityLike({ postId }).then(() => refetch());
      }}
      goToCommentList={(id) =>
        navigation(BuildPaths.communityComment(id.toString()))
      }
    />
  );
};

export default CommunityDetail;
