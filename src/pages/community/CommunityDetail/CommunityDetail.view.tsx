import styles from "./CommunityDetail.module.scss";
import ContentHeader from "../../../components/ContentHeader";
import ContentBody from "../../../components/ContentBody";
import CommunityFooter from "../../../components/CommunityFooter";
import ImageDetailView from "../../ImageDetail";
import { useState } from "react";

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
  isOpenImage: boolean;
  openImageViewer: () => void;
  closeImageViewer: () => void;
  onClickLike: (id: number) => void;
  goToCommentList: (id: number) => void;
}

const CommunityDetailView = ({
  community,
  isOpenImage,
  openImageViewer,
  closeImageViewer,
  onClickLike,
  goToCommentList,
}: Props) => {
  const [imageIndex, setImageIndex] = useState<number>(0);

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
  } = community;

  return (
    <div className={styles.container}>
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
          openImageViewer();
          setImageIndex(imageList!.findIndex(image => image.id === id));
        }}
        onClickMore={() => {
          openImageViewer();
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

      {isOpenImage && imageList && (
        <ImageDetailView
          className={styles.imageDetail}
          imageList={imageList}
          imageIndex={imageIndex}
          onClickClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default CommunityDetailView;
