import ContentHeader from "../../../components/ContentHeader";
import styles from "./NoticeDetail.module.scss";

export interface Props {
  title: string;
  profileImage: string;
  nickname: string;
  date: Date;
  content: string;
  onClickProfile?: () => void;
}

const NoticeDetailView = ({
  title,
  profileImage,
  nickname,
  date,
  content,
  onClickProfile,
}: Props) => {
  return (
    <div className={styles.container}>
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
