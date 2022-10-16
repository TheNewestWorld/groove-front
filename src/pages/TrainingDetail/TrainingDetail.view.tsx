import ContentHeader from "../../components/ContentHeader";
import RoundButton from "../../components/RoundButton";
import useOpen from "../../hooks/useOpen";
import ConfirmBottomSheet from "./components/ConfirmBottomSheet";
import FeedbackSection from "./components/FeedbackSection";
import { Props as FeedbackViewType } from "./components/Feedback";
import styles from "./TrainingDetail.module.scss";

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
  const {
    isOpen: isShowBottomSheet,
    onOpen: onOpenBottomSheet,
    onClose: onCloseBottomSheet,
  } = useOpen();

  const buttons = ({
    status,
    role,
  }: {
    status: "ready" | "in-progress" | "done";
    role: "writer" | "trainer" | "unknown";
  }) => {
    if (status === "done" || (role === "unknown" && status === "in-progress")) {
      return <RoundButton disabled>코칭이 완료됐어요</RoundButton>;
    } else if (role === "writer" && status === "in-progress") {
      return (
        <RoundButton onClick={onOpenBottomSheet}>
          코칭 내용을 확인했어요.
        </RoundButton>
      );
    } else if (role === "trainer" && status === "ready") {
      return (
        <>
          <RoundButton colorTheme="secondary" className={styles.button}>
            거절할게요
          </RoundButton>
          <RoundButton
            onClick={() => alert("TODO: 피드백 작성 페이지 이동")}
            className={styles.button}
          >
            피드백 할게요
          </RoundButton>
        </>
      );
    } else if (role === "trainer" && status === "in-progress") {
      return <RoundButton disabled>아직 확인하지 않았어요</RoundButton>;
    } else {
      return;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <ContentHeader
          title={title}
          profileImage={profileImage}
          nickname={nickname}
          date={date}
          className={styles.header}
        />
        <hr />
        <div className={styles.content}>{content}</div>

        <FeedbackSection
          feedback={feedback}
          showDefaultMessage={role !== "trainer"}
        >
          {buttons({ role, status })}
        </FeedbackSection>
      </div>

      <ConfirmBottomSheet
        trainerId={0}
        isShow={isShowBottomSheet}
        onClose={onCloseBottomSheet}
      />
    </>
  );
};

export default TrainingDetailView;
