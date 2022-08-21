import classNames from "classnames";
import { CloseIcon } from "../../assets/icon";
import "./BottomSheetList.scss";

export interface Props {
  header?: string;
  list: string[];
  activeItem?: string;
  onClick?: (value: string) => void;
  onClose?: () => void;
}

const BottomSheetList = ({
  header,
  list,
  activeItem = "",
  onClick,
  onClose,
}: Props) => {
  return (
    <div className="bottom-sheet-list">
      <div className="bottom-sheet-list__header">
        {header && <span>{header}</span>}
        {onClose && (
          <CloseIcon className="bottom-sheet-list__icon" onClick={onClose} />
        )}
      </div>
      {list.map((item) => (
        <div
          key={item}
          className={classNames([
            "bottom-sheet-list__item",
            activeItem === item && "active",
          ])}
          onClick={() => {
            onClick?.(item);
            onClose?.();
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default BottomSheetList;
