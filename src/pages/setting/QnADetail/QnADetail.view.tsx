import useOpen from "../../../hooks/useOpen";
import ContentHeader from "../../../components/ContentHeader";
import Header from "../../../components/Header";
import QnABottomSheet from "./components/QnABottomSheet";
import styles from "./QnADetail.module.scss";
import { ArrowIcon, DotsHorizonIcon } from "../../../assets/icon";

export interface Props {
  qna_id: number;
  user_id: number;
  title: string;
  profileImage: string;
  nickname: string;
  date: Date;
  content: string;
  onClickProfile: (id: number) => void;
  onClose: () => void;
  onDelete: (id: number) => void;
  onModify: (id: number) => void;
}

const QnADetailView = ({
  qna_id,
  user_id,
  title,
  profileImage,
  nickname,
  date,
  content,
  onClickProfile,
  onClose,
  onDelete,
  onModify,
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
      <ContentHeader
        title={title}
        profileImage={profileImage}
        nickname={nickname}
        date={date}
        onClickProfile={() => onClickProfile(user_id)}
        className={styles.header}
      />
      <div className={styles.content}>{content}</div>
      {isOpenOption && (
        <QnABottomSheet
          onClose={onCloseOption}
          onClickDelete={() => onDelete(qna_id)}
          onClickModify={() => onModify(qna_id)}
        />
      )}
    </div>
  );
};

export default QnADetailView;
