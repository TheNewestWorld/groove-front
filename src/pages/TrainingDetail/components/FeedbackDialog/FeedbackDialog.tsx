import Dialog from "../../../../components/Dialog";

interface Props {
  isShow: boolean;
  nickname: string;
  onClickCancle: () => void;
  onClickOk: () => void;
}

const FeedbackDialog = ({
  isShow,
  nickname,
  onClickCancle,
  onClickOk,
}: Props) => {
  if (!isShow) {
    return null;
  }

  return (
    <Dialog title={`${nickname} 트레이너에게\n다시 피드백을 요청하시겠어요?`}>
      <button onClick={onClickCancle}>괜찮아요</button>
      <button onClick={onClickOk}>요청할래요</button>
    </Dialog>
  );
};

export default FeedbackDialog;
