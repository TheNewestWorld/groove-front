import styles from "./CommunityDetail.module.scss";
import Header from "../../components/Header";

import { ArrowTailIcon, ReportIcon } from "../../assets/icon";

import ContentHeader from "../../components/ContentHeader";
import ContentBody from "../../components/ContentBody";
import CommunityFooter from "../../components/CommunityFooter";

export interface Props {
  title: string;
  profileImage: string;
  nickname: string;
  date: Date;
  onClickProfile?: () => void;
  content: string;
  imageList?: { src: string; id: number }[];
  audio: { title: string; src: string; id: number };
  onClickImage?: (id: number) => void;
  onClickMore?: () => void;
  likeCount: number;
  liked?: boolean;
  commentCount: number;
  onBackClick?: () => void;
  onOptionClick?: () => void;
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
  onClickImage,
  onClickMore,
  likeCount,
  liked,
  commentCount,
  onBackClick,
  onOptionClick,
}: Props) => {
  return (
    <div className={styles.container}>
      <Header
        title="게시물"
        left={<ArrowTailIcon />}
        right={<ReportIcon />}
        onLeftClick={onBackClick}
        onRightClick={onOptionClick}
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
        onClickImage={onClickImage}
        onClickMore={onClickMore}
      />
      <CommunityFooter
        likeCount={likeCount}
        liked={liked}
        commentCount={commentCount}
      />
    </div>
  );
};

export default CommunityDetailView;
