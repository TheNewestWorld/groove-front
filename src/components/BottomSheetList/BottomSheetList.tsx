import classNames from "classnames";
import BottomSheet from "../BottomSheet";
import styles from "./BottomSheetList.module.scss";

export interface Props {
  title?: string;
  list: string[];
  activeItem?: string;
  onClick?: (value: string) => void;
  hasCloseButton?: boolean;
  onClose: () => void;
}

const BottomSheetList = ({
  title,
  list,
  activeItem = "",
  onClick,
  hasCloseButton,
  onClose,
}: Props) => {
  return (
    <BottomSheet
      onClose={onClose}
      hasCloseButton={hasCloseButton}
      title={title}
    >
      {list.map((item) => (
        <div
          key={item}
          className={classNames([
            styles.item,
            activeItem === item && styles.active,
          ])}
          onClick={() => {
            onClick?.(item);
            onClose?.();
          }}
        >
          {item}
        </div>
      ))}
    </BottomSheet>
  );
};

export default BottomSheetList;
