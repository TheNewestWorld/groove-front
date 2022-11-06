import BottomSheet from "../../../../../components/BottomSheet";
import RoundButton from "../../../../../components/RoundButton";
import styles from "./ConfirmBottomSheet.module.scss";

interface Props {
  trainerId: number;
  isShow: boolean;
  onClose: () => void;
}

const ConfirmButtonView = ({ trainerId, isShow, onClose }: Props) => {
  return (
    <BottomSheet
      isShow={isShow}
      title="코칭 이용후기를 남겨주시겠어요?"
      onClose={onClose}
      hasCloseButton={false}
    >
      {/* TODO: 줄바꿈 조건 */}
      <div className={styles.description}>
        후기를 남겨주신다면 다른 사용자와 트레이너 모두에게 큰 도움이 될 거예요.
      </div>
      <div>
        <RoundButton
          colorTheme="secondary"
          onClick={() => {
            alert("TODO: 클릭이벤트 적용");
            onClose();
          }}
          className={styles.button}
        >
          나중에 할게요
        </RoundButton>
        <RoundButton
          className={styles.button}
          onClick={() => {
            // TODO: trainerId 이용해서 화면 이동 예정
            alert("TODO: 리뷰 작성화면 이동");
            onClose();
          }}
        >
          네, 작성할게요
        </RoundButton>
      </div>
    </BottomSheet>
  );
};

export default ConfirmButtonView;
