import useOpen from "../../../hooks/useOpen";
import ContentHeader from "../../../components/ContentHeader";
import Header from "../../../components/Header";
import QnABottomSheet from "./components/QnABottomSheet";
import styles from "./QnADetail.module.scss";
import { ArrowIcon, DotsHorizonIcon } from "../../../assets/icon";
import AnswerComponent from "./components/AnswerComponent";
import RoundButton from "../../../components/RoundButton";

export interface Props {
  qnaInfo: {
    title: string;
    profileImage: string;
    nickname: string;
    date: Date;
    content: string;
  };
  answerInfo?: {
    answerTitle: string;
    answerContent: string;
  };
  onClose: () => void;
  onDelete: () => void;
  onModify: () => void;
  onClickReQnA?: () => void;
}

const QnADetailView = ({
  qnaInfo,
  answerInfo,
  onClose,
  onDelete,
  onModify,
  onClickReQnA,
}: Props) => {
  const {
    isOpen: isOpenOption,
    onOpen: onOpenOption,
    onClose: onCloseOption,
  } = useOpen();

  return (
    <div className={styles.container}>
      <Header
        title="공지사항"
        left={<ArrowIcon />}
        right={<DotsHorizonIcon />}
        onClickLeft={onClose}
        onClickRight={onOpenOption}
      />
      {/* TODO: badge(답변완료) */}
      <ContentHeader
        title={qnaInfo.title}
        profileImage={qnaInfo.profileImage}
        nickname={qnaInfo.nickname}
        date={qnaInfo.date}
        className={styles.header}
      />
      <div className={styles.content}>{qnaInfo.content}</div>
      <QnABottomSheet
        isShow={isOpenOption}
        onClose={onCloseOption}
        onClickDelete={() => onDelete()}
        onClickModify={() => onModify()}
      />
      {answerInfo && (
        <>
          <AnswerComponent
            title={answerInfo.answerTitle}
            content={answerInfo.answerContent}
            className={styles.answer}
          />
          <RoundButton
            colorTheme="dark"
            onClick={onClickReQnA}
            className={styles.button}>
            다시 문의하기
          </RoundButton>
        </>
      )}
    </div>
  );
};

export default QnADetailView;
