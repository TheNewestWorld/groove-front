import { ArrowIcon } from "../../../assets/icon";
import ContentHeader from "../../../components/ContentHeader";
import Header from "../../../components/Header";
import styles from "./NoticeDetail.module.scss";

export interface Props {
  title: string;
  profileImage: string;
  nickname: string;
  date: Date;
  content: string;
  onClickProfile?: () => void;
  onClose: () => void;
}

const NoticeDetailView = ({
  title,
  profileImage,
  nickname,
  date,
  content,
  onClickProfile,
  onClose,
}: Props) => {
  return (
    <div className={styles.container}>
      <Header title="공지사항" left={<ArrowIcon />} onClickLeft={onClose} />
      <ContentHeader
        title={title}
        profileImage={profileImage}
        nickname={nickname}
        date={date}
        onClickProfile={onClickProfile}
        className={styles.header}
      />
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default NoticeDetailView;
