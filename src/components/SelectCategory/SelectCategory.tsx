import classNames from "classnames";
import BottomSheetList from "../BottomSheetList";
import { SelectIcon } from "../../assets/icon";
import useOpen from "../../hooks/useOpen";
import styles from "./SelectCategory.module.scss";

export interface Props {
  title?: string;
  className?: string;
  placeholder: string
  categoryList: string[];
  hasCloseButton?: boolean;
  onClickCategory: (category: string) => string;
}

const SelectCategory = ({
  title,
  className,
  placeholder,
  onClickCategory,
  categoryList,
  hasCloseButton,
}: Props) => {
  const { isOpen, onOpen, onClose } = useOpen();
  return (
    <div>
      <div className={classNames([className, styles.container, styles.category, styles.category__active])} onClick={onOpen}>
        {placeholder}
        <SelectIcon className={styles.category__active__icon} />
      </div>
      {isOpen && (
        <BottomSheetList
          title={title}
          hasCloseButton={hasCloseButton}
          list={categoryList}
          activeItem={placeholder}
          onClick={onClickCategory}
          onClose={onClose}
        />
      )}
    </div>
  );
};

export default SelectCategory;
