import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowTailIcon, SmallDotsIcon } from "../../../assets/icon";
import {
  setCommunityDislike,
  setCommunityLike,
} from "../../../common/apis/like";
import { deletePost } from "../../../common/apis/post";
import { postReport } from "../../../common/apis/reports";
import BuildPaths from "../../../common/paths";
import usePostDetailQuery from "../../../common/queries/posts/usePostDetailQuery";
import BottomSheetList from "../../../components/BottomSheetList";
import Dialog from "../../../components/Dialog";
import Error from "../../../components/Error";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import ReportBottomSheet from "../../../components/ReportBottomSheet";
import RoundButton from "../../../components/RoundButton";
import CommunityDetailView from "./CommunityDetail.view";
import styles from "./CommunityDetail.module.scss";

const CommunityDetail = () => {
  const navigation = useNavigate();
  const [isOpenOption, setOpenOption] = useState<boolean>(false);
  const [showReportOption, setReportOption] = useState<boolean>(false);
  const [showDeleteDialog, setDeleteDialog] = useState<boolean>(false);

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

  const onClickModify = () => navigation(BuildPaths.communityEdit(communityId));

  const onClickReport = (
    reason: "HARSH_PROFANITY" | "FALSE_INFORMATION" | "INAPPROPRIATE_CONTENT"
  ) => {
    postReport({
      postId: Number(communityId),
      reportTargetType: "POST",
      reportReasonType: reason,
    });
  };

  const onClickDelete = () => {
    deletePost({ postId: Number(communityId) });
    navigation(-1);
  };

  return (
    <>
      <Header
        left={<ArrowTailIcon />}
        right={<SmallDotsIcon />}
        onClickLeft={() => navigation(-1)}
        onClickRight={() => setOpenOption(true)}
      />
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
        onClickLike={(postId) => {
          post.likeFlag
            ? setCommunityDislike({ postId }).then(() => refetch())
            : setCommunityLike({ postId }).then(() => refetch());
        }}
        goToCommentList={(id) =>
          navigation(BuildPaths.communityComment(id.toString()))
        }
      />

      {isOpenOption &&
        (post.authority ? (
          <BottomSheetList
            list={["수정하기", "삭제하기"]}
            onClose={() => setOpenOption(false)}
            onClick={(value: string) => {
              value === "수정하기" ? onClickModify() : setDeleteDialog(true);
            }}
          />
        ) : (
          <BottomSheetList
            list={["신고하기"]}
            activeItem="신고하기"
            onClose={() => setOpenOption(false)}
            onClick={() => {
              setOpenOption(false);
              setReportOption(true);
            }}
          />
        ))}

      <ReportBottomSheet
        isShow={showReportOption}
        submitReport={onClickReport}
        onClickClose={() => setReportOption(false)}
      />

      {showDeleteDialog && (
        <Dialog title="정말 삭제하시겠어요?">
          <RoundButton
            className={styles.dialogButton}
            colorTheme="secondary"
            onClick={() => setDeleteDialog(false)}
          >
            아니요
          </RoundButton>
          <RoundButton
            className={styles.dialogButton}
            colorTheme="dark"
            onClick={onClickDelete}
          >
            네, 할게요
          </RoundButton>
        </Dialog>
      )}
    </>
  );
};

export default CommunityDetail;
