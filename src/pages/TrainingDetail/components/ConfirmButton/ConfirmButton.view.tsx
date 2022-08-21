import React from "react";
import BottomSheet from "../../../../components/BottomSheet";
import useOpen from "../../../../hooks/useOpen";
import FeedbackDialog from "../FeedbackDialog";
import "./ConfirmButton.scss";

interface Props {
  trainerName: string;
}

const ConfirmButtonView = ({ trainerName }: Props) => {
  const {
    isOpen: isShowBottomSheet,
    onOpen: onOpenBottomSheet,
    onClose: onCloseBottomSheet,
  } = useOpen();

  const {
    isOpen: isShowDialog,
    onOpen: onOpenDialog,
    onClose: onCloseDialog,
  } = useOpen();

  return (
    <>
      {/* roundbutton으로 변경 */}
      <button onClick={onOpenBottomSheet}>코칭 내용을 확인했어요.</button>

      <BottomSheet
        isShow={isShowBottomSheet}
        title={`${trainerName} 트레이너의\n피드백은 만족스러우셨나요?`}
        onClose={onCloseBottomSheet}
      >
        <div>
          <button
            onClick={() => {
              onOpenDialog();
              onCloseBottomSheet();
            }}
          >
            조금 아쉬워요
          </button>
          <button
            onClick={() => {
              alert("TODO: 리뷰 작성화면 이동");
              onCloseBottomSheet();
            }}
          >
            네, 만족해요
          </button>
        </div>
      </BottomSheet>

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
