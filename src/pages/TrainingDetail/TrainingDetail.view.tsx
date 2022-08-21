import classNames from "classnames";
import ContentHeader from "../../components/ContentHeader";
import ConfirmButton from "./components/ConfirmButton";
import Feedback, { Props as FeedbackViewType } from "./components/Feedback";
import "./TrainingDetail.scss";

export interface Props {
  title: string;
  nickname: string;
  profileImage: string;
  date: Date;
  content: string;
  status: "ready" | "in-progress" | "done";
  role: "writer" | "trainer" | "unknown";
  feedback: FeedbackViewType;
}

const TrainingDetailView = ({
  title,
  nickname,
  profileImage,
  date,
  content,
  status,
  role,
  feedback,
}: Props) => {
  return (
    <div className="training-detail">
      <ContentHeader
        title={title}
        imageUrl={profileImage}
        nickname={nickname}
        date={date}
        className="training-detail__header"
      />
      <hr />
      <div className="content">{content}</div>

      <div className="divider" />
      {role === "unknown" && (
        <>
          {feedback ? (
            <div className="training-detail__feedback">
              <Feedback {...feedback} />
            </div>
          ) : (
            <div
              className={classNames(["training-detail__feedback", "center"])}
            >
              아직 피드백이 도착하지 않았어요. 😢
            </div>
          )}
        </>
      )}

      {role === "writer" && (
        <>
          {feedback ? (
            <>
              <div className="training-detail__feedback">
                <Feedback {...feedback} />
              </div>
              {status === "in-progress" && (
                <ConfirmButton trainerName={feedback.nickname} />
              )}
              {status === "done" && <button>코칭이 완료됐어요.</button>}
            </>
          ) : (
            <div
              className={classNames(["training-detail__feedback", "center"])}
            >
              아직 피드백이 도착하지 않았어요. 😢
            </div>
          )}
        </>
      )}

      {role === "trainer" && (
        <>
          {feedback ? (
            <div className="training-detail__feedback">
              <Feedback {...feedback} />
            </div>
          ) : (
            <div></div>
          )}
        </>
      )}
    </div>
  );
};

export default TrainingDetailView;
