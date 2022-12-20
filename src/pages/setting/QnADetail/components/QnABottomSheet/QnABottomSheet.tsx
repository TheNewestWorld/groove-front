import classNames from "classnames";
import BottomSheet from "../../../../../components/BottomSheet";
import styles from "./QnABottomSheet.module.scss";
import { DeleteIcon, PencilIcon } from "../../../../../assets/icon";

export interface Props {
  isShow: boolean;
  onClose: () => void;
  onClickDelete: () => void;
  onClickModify?: () => void;
}

const QnABottomSheet = ({
  isShow,
  onClose,
  onClickDelete,
  onClickModify,
}: Props) => {

  return (
    <BottomSheet isShow={isShow} onClose={onClose}>
      <div
        className={classNames([styles.section, styles.modify])}
        onClick={onClickModify}>
        <PencilIcon className={styles.icon} />
        수정하기
      </div>
      <div
        className={classNames([styles.section, styles.delete])}
        onClick={onClickDelete}>
        <DeleteIcon className={styles.icon} />
        삭제하기
      </div>
    </BottomSheet>
  );
};

export default QnABottomSheet;
