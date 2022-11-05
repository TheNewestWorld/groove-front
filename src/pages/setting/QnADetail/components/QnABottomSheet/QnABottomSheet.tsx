import { useRef } from "react";
import styles from "./QnABottomSheet.module.scss";
import {
  CloseCircleIcon,
  DeleteIcon,
  PencilIcon,
} from "../../../../../assets/icon";

export interface Props {
  onClose?: () => void;
  onClickDelete?: () => void;
  onClickModify?: () => void;
}

const QnABottomSheet = ({
  onClose,
  onClickDelete,
  onClickModify,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onClick={e => {
        if (e.target === containerRef.current) {
          console.log("hello")
          onClose!();
        }
      }}>
      <div className={styles.white}>
        <div className={styles.modify_container}>
          <div className={styles.modify_section} onClick={onClickModify}>
            <PencilIcon className={styles.icon} />
            수정하기
          </div>
          <CloseCircleIcon onClick={onClose}/>
        </div>
        <div className={styles.delete_section} onClick={onClickDelete}>
          <DeleteIcon className={styles.icon} />
          삭제하기
        </div>
      </div>
    </div>
  );
};

export default QnABottomSheet;
