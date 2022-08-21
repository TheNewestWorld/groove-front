import { useRef } from "react";
import { CloseIcon } from "../../assets/icon";
import styles from "./BottomSheet.module.scss";

export interface Props {
  isShow?: boolean;
  title?: string;
  hasCloseButton?: boolean;
  children?: React.ReactNode;
  onClose: () => void;
}

const BottomSheetView = ({
  isShow = true,
  title,
  hasCloseButton = true,
  children,
  onClose,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  if (!isShow) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onClick={(e) => {
        if (e.target === containerRef.current) {
          onClose();
        }
      }}
    >
      <div className={styles.white}>
        <div className={styles.header}>
          {title && <span>{title}</span>}
          {hasCloseButton && (
            <CloseIcon className={styles.icon} onClick={onClose} />
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default BottomSheetView;
