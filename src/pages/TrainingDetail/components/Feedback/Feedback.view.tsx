import classNames from "classnames";
import ContentHeader from "../../../../components/ContentHeader";
import styles from "./Feedback.module.scss";

export interface Props {
  title: string;
  nickname: string;
  profileImage: string;
  date: Date;
  content: string;
  className?: string;
}

const FeedbackView = ({
  title,
  nickname,
  profileImage,
  date,
  content,
  className,
}: Props) => {
  return (
    <div className={classNames([styles.container, className])}>
      <ContentHeader
        title={title}
        imageUrl={profileImage}
        nickname={nickname}
        date={date}
      />
      <hr />
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default FeedbackView;
