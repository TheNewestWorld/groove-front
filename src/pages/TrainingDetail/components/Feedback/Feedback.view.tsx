import ContentHeader from "../../../../components/ContentHeader";
import "./Feedback.scss";

export interface Props {
  title: string;
  nickname: string;
  profileImage: string;
  date: Date;
  content: string;
  classNames?: string;
}

const FeedbackView = ({
  title,
  nickname,
  profileImage,
  date,
  content,
}: Props) => {
  return (
    <div className="feedback-container">
      <ContentHeader
        title={title}
        imageUrl={profileImage}
        nickname={nickname}
        date={date}
      />
      <hr />
      <div className="feedback-content">{content}</div>
    </div>
  );
};

export default FeedbackView;
