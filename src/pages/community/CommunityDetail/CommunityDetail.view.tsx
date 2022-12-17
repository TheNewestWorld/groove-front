import styles from "./CommunityDetail.module.scss";
import Header from "../../../components/Header";

import { ArrowTailIcon, SmallDotsIcon } from "../../../assets/icon";

import ContentHeader from "../../../components/ContentHeader";
import ContentBody from "../../../components/ContentBody";
import CommunityFooter from "../../../components/CommunityFooter";
import BottomSheetList from "../../../components/BottomSheetList";
import ImageDetailView from "../../ImageDetail";
import { useState } from "react";

export interface Props {
  title: string;
  profileImage: string;
  nickname: string;
  date: Date;
  onClickProfile?: () => void;
  content: string;
  imageList?: { src: string; id: number; type: string }[];
  audio: { title: string; src: string; id: number };
  likeCount: number;
  liked?: boolean;
  commentCount: number;
  onClickBack?: () => void;
  onClickOption?: () => void;
  isOpenOption?: boolean;
  hasAuthority?: boolean;
  onCloseOption: () => void;
  onClickModify: () => void;
  onClickDelete: () => void;
  onClickReport: () => void;
}

const CommunityDetailView = ({
  title,
  profileImage,
  nickname,
  date,
  onClickProfile,
  content,
  imageList,
  audio,
  likeCount,
  liked,
  commentCount,
  onClickBack,
  onClickOption,
  isOpenOption = false,
  hasAuthority = false,
  onCloseOption,
  onClickModify,
  onClickDelete,
  onClickReport,
}: Props) => {
  const [isOpenImage, openImage] = useState<boolean>(false);
  const [imageId, setImageId] = useState<number>(0);

  return (
    <div className={styles.container}>
      <Header
        title="게시물"
        left={<ArrowTailIcon />}
        right={<SmallDotsIcon />}
        onClickLeft={onClickBack}
        onClickRight={onClickOption}
      />
      <ContentHeader
        className={styles.header}
        title={title}
        profileImage={profileImage}
        nickname={nickname}
        date={date}
        onClickProfile={onClickProfile}
      />
      <ContentBody
        className={styles.content}
        content={content}
        imageList={imageList}
        audio={audio}
        onClickImage={(id: number) => {
          openImage(true);
          setImageId(id);
        }}
        onClickMore={() => {
          openImage(true);
          // TODO(in.heo): Remove hard-code
          setImageId(4);
        }}
      />
      <CommunityFooter
        likeCount={likeCount}
        liked={liked}
        commentCount={commentCount}
      />

      {isOpenOption &&
        (hasAuthority ? (
          <BottomSheetList
            list={["수정하기", "삭제하기"]}
            onClose={onCloseOption}
            onClick={(value: string) => {
              value === "수정하기" ? onClickModify() : onClickDelete();
            }}
          />
        ) : (
          <BottomSheetList
            list={["신고하기"]}
            activeItem="신고하기"
            onClose={onCloseOption}
            onClick={(value: string) => {
              onClickReport();
            }}
          />
        ))}

      {isOpenImage && imageList && (
        <ImageDetailView
          className={styles.imageDetail}
          imageList={imageList}
          imageIndex={imageId}
          onClickClose={() => openImage(false)}
        />
      )}
    </div>
  );
};

export default CommunityDetailView;
