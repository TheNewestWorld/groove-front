import ContentHeader from "../../../components/ContentHeader";
import QnABottomSheet from "./components/QnABottomSheet";
import styles from "./QnADetail.module.scss";
import AnswerComponent from "./components/AnswerComponent";
import RoundButton from "../../../components/RoundButton";
import ContentBody from "../../../components/ContentBody";
import { useState } from "react";

export interface Props {
  qnaInfo: {
    title: string;
    profileImage: string;
    nickname: string;
    date: Date;
    content: string;
    imageList: { id: number; src: string }[];
  };
  answerInfo?: {
    answerTitle: string;
    answerContent: string;
  };
  onDelete: () => void;
  onModify: () => void;
  onClickReQnA?: () => void;
}

const QnADetailView = ({
  qnaInfo,
  answerInfo,
  onDelete,
  onModify,
  onClickReQnA,
}: Props) => {
  const [isOpenOption, setOpenOption] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      {/* TODO: badge(답변완료) */}
      <ContentHeader
        title={qnaInfo.title}
        profileImage={qnaInfo.profileImage}
        nickname={qnaInfo.nickname}
        date={qnaInfo.date}
        className={styles.header}
      />
      <ContentBody
        className={styles.content}
        content={qnaInfo.content}
        imageList={qnaInfo.imageList}
      />
      <QnABottomSheet
        isShow={isOpenOption}
        onClose={() => setOpenOption(false)}
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
            className={styles.button}
          >
            다시 문의하기
          </RoundButton>
        </>
      )}
    </div>
  );
};

export default QnADetailView;
