import classNames from "classnames";
import { CloseIcon, SelectIcon } from "../../assets/icon";
import useOpen from "../../hooks/useOpen";
import "./TopDownFilter.scss";

export interface Props {
  className?: string;
  activeFilter: string;
  filterList: string[];
  onClickFilter: (filter: string) => void;
}

const TopDownFilter = ({
  className,
  activeFilter,
  filterList,
  onClickFilter,
}: Props) => {
  const { isOpen, onOpen, onClose } = useOpen();

  return (
    <>
      <div
        className={classNames(["top-down-filter__active", className])}
        onClick={onOpen}
      >
        {activeFilter}
        <SelectIcon className="top-down-filter__active__icon" />
      </div>
      {isOpen && (
        <div className={classNames(["top-down-filter__list"])}>
          <div className="top-down-filter__list__header">
            <span>게시물 정렬</span>
            <CloseIcon
              className="top-down-filter__list__icon"
              onClick={onClose}
            />
          </div>
          {filterList.map((filter) => (
            <div
              key={filter}
              className={classNames([
                "top-down-filter__item",
                activeFilter === filter && "active",
              ])}
              onClick={() => {
                onClickFilter(filter);
                onClose();
              }}
            >
              {filter}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TopDownFilter;
