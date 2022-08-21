import classNames from "classnames";
import { useRef } from "react";
import { CloseIcon } from "../../assets/icon";
import "./BottomSheetList.scss";

export interface Props {
  header?: string;
  list: string[];
  activeItem?: string;
  onClick?: (value: string) => void;
  hasCloseButton?: boolean;
  onClose: () => void;
}

const BottomSheetList = ({
  header,
  list,
  activeItem = "",
  onClick,
  hasCloseButton = true,
  onClose,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="bottom-sheet-list__container"
      onClick={(e) => {
        if (e.target === containerRef.current) {
          onClose();
        }
      }}
    >
      <div className="bottom-sheet-list">
        <div className="bottom-sheet-list__header">
          {header && <span>{header}</span>}
          {hasCloseButton && (
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
    </div>
  );
};

export default BottomSheetList;
