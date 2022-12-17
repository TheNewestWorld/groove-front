import { useNavigate, useParams } from "react-router-dom";
import { deletePost } from "../../../common/apis/post";
import BuildPaths from "../../../common/paths";
import usePostDetailQuery from "../../../common/queries/posts/usePostDetailQuery";
import CommunityDetailView from "./CommunityDetail.view";

const CommunityDetail = () => {
  const navigation = useNavigate();
  const { communityId } = useParams<{ communityId: string }>();

  const { isLoading, isError, post } = usePostDetailQuery(
    {
      postId: Number(communityId),
    },
    {
      enabled: !!communityId,
    }
  );

  if (isLoading || !post) {
    return <div>로딩 화면 추가</div>;
  }

  if (isError || !communityId) {
    return <div>에러 화면 추가</div>;
  }

  return (
    <>
      {
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
          onClickBack={() => {
            navigation(-1);
          }}
          onClickModify={() => {}}
          onClickDelete={() => {
            deletePost({ postId: Number(communityId) });
            navigation(-1);
          }}
          onClickReport={() => {}}
          onClickLike={(id) => {}}
          goToCommentList={(id) =>
            navigation(BuildPaths.communityComment(id.toString()))
          }
        />
      }
    </>
  );
};

export default CommunityDetail;
