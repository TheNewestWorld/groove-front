import styles from "./CommunityDetail.module.scss";
import Header from "../../../components/Header";

import { ArrowTailIcon, SmallDotsIcon } from "../../../assets/icon";

import ContentHeader from "../../../components/ContentHeader";
import ContentBody from "../../../components/ContentBody";
import CommunityFooter from "../../../components/CommunityFooter";
import BottomSheetList from "../../../components/BottomSheetList";
import ImageDetailView from "../../ImageDetail";
import { useState } from "react";
import Dialog from "../../../components/Dialog";
import RoundButton from "../../../components/RoundButton";
import ReportBottomSheet from "../../../components/ReportBottomSheet";

export interface Props {
  community: {
    id: number;
    title: string;
    profileImage: string;
    nickname: string;
    date: Date;
    content: string;
    imageList?: { src: string; id: number; type: string }[];
    audio: { title: string; src: string; id: number };
    likeCount: number;
    liked?: boolean;
    commentCount: number;
    hasAuthority?: boolean;
  };
  onClickBack?: () => void;
  onClickModify: () => void;
  onClickDelete: () => void;
  onClickReport: (
    reason: "HARSH_PROFANITY" | "FALSE_INFORMATION" | "INAPPROPRIATE_CONTENT"
  ) => void;
  onClickLike: (id: number) => void;
  goToCommentList: (id: number) => void;
}

const CommunityDetailView = ({
  community,
  onClickBack,
  onClickModify,
  onClickDelete,
  onClickReport,
  onClickLike,
  goToCommentList,
}: Props) => {
  const [isOpenImage, openImage] = useState<boolean>(false);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [isOpenOption, openOption] = useState<boolean>(false);
  const [showDeleteDialog, setDeleteDialog] = useState<boolean>(false);
  const [showReportOption, setReportOption] = useState<boolean>(false);

  const {
    id,
    title,
    profileImage,
    nickname,
    date,
    content,
    imageList,
    audio,
    likeCount,
    liked,
    commentCount,
    hasAuthority = false,
  } = community;

  return (
    <>
      <div className={styles.container}>
        <Header
          title="게시물"
          left={<ArrowTailIcon />}
          right={<SmallDotsIcon />}
          onClickLeft={onClickBack}
          onClickRight={() => openOption(true)}
        />
        <ContentHeader
          className={styles.header}
          title={title}
          profileImage={profileImage}
          nickname={nickname}
          date={date}
        />
        <ContentBody
          className={styles.content}
          content={content}
          imageList={imageList}
          audio={audio}
          onClickImage={(id: number) => {
            openImage(true);
            setImageIndex(imageList!.findIndex((image) => image.id === id));
          }}
          onClickMore={() => {
            openImage(true);
            // TODO(in.heo): Remove hard-code
            setImageIndex(4);
          }}
        />
        <CommunityFooter
          likeCount={likeCount}
          liked={liked}
          commentCount={commentCount}
          onClickLike={() => onClickLike(id)}
          goToCommentList={() => goToCommentList(id)}
        />

        {isOpenOption &&
          (hasAuthority ? (
            <BottomSheetList
              list={["수정하기", "삭제하기"]}
              onClose={() => openOption(false)}
              onClick={(value: string) => {
                value === "수정하기" ? onClickModify() : setDeleteDialog(true);
              }}
            />
          ) : (
            <BottomSheetList
              list={["신고하기"]}
              activeItem="신고하기"
              onClose={() => openOption(false)}
              onClick={() => {
                openOption(false);
                setReportOption(true);
              }}
            />
          ))}

        <ReportBottomSheet
          isShow={showReportOption}
          submitReport={onClickReport}
          onClickClose={() => setReportOption(false)}
        />

        {isOpenImage && imageList && (
          <ImageDetailView
            className={styles.imageDetail}
            imageList={imageList}
            imageIndex={imageIndex}
            onClickClose={() => openImage(false)}
          />
        )}
      </div>

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

export default CommunityDetailView;
