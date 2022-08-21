import classNames from "classnames";
import { SelectIcon } from "../../assets/icon";
import useOpen from "../../hooks/useOpen";
import BottomSheetList from "../BottomSheetList";
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
        <BottomSheetList
          title="정렬 순서를 선택해주세요."
          list={filterList}
          activeItem={activeFilter}
          onClick={onClickFilter}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default TopDownFilter;
