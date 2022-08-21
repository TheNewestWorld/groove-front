import React from "react";
import useOpen from "../../../../hooks/useOpen";
import FeedbackDialog from "../FeedbackDialog";
import "./ConfirmButton.scss";

interface Props {
  trainerName: string;
}

const ConfirmButtonView = ({ trainerName }: Props) => {
  const {
    isOpen: isShowModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useOpen();

  const {
    isOpen: isShowDialog,
    onOpen: onOpenDialog,
    onClose: onCloseDialog,
  } = useOpen();

  return (
    <>
      {/* roundbutton으로 변경 */}
      <button onClick={onOpenModal}>코칭 내용을 확인했어요.</button>
      {isShowModal && (
        <div className="confirm-button__bottom-sheet">
          <div className="confirm-button__title">
            {trainerName} 트레이너의
            <br />
            피드백은 만족스러우셨나요?
          </div>
          <div>
            <button
              onClick={() => {
                onOpenDialog();
                onCloseModal();
              }}
            >
              조금 아쉬워요
            </button>
            <button
              onClick={() => {
                alert("TODO: 리뷰 작성화면 이동");
                onCloseModal();
              }}
            >
              네, 만족해요
            </button>
          </div>
        </div>
      )}

      <FeedbackDialog
        isShow={isShowDialog}
        nickname={trainerName}
        onClickCancle={onCloseDialog}
        onClickOk={() => {
          alert("TODO: 코칭 신청화면 이동");
          onCloseDialog();
        }}
      />
    </>
  );
};

export default ConfirmButtonView;
