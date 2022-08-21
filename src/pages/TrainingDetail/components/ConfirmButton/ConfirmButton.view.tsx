import React from "react";
import useOpen from "../../../../hooks/useOpen";
import "./ConfirmButton.scss";

interface Props {
  trainerName: string;
}

const ConfirmButtonView = ({ trainerName }: Props) => {
  const { isOpen, onOpen, onClose } = useOpen();
  return (
    <>
      {/* roundbutton으로 변경 */}
      <button onClick={onOpen}>코칭 내용을 확인했어요.</button>
      {isOpen && (
        <div className="confirm-button__bottom-sheet">
          <div className="confirm-button__title">
            {trainerName} 트레이너의
            <br />
            피드백은 만족스러우셨나요?
          </div>
          <div>
            <button
              onClick={() => {
                alert("TODO: 모달 띄우기");
                onClose();
              }}
            >
              조금 아쉬워요
            </button>
            <button
              onClick={() => {
                alert("TODO: 리뷰 작성화면 이동");
                onClose();
              }}
            >
              네, 만족해요
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmButtonView;
