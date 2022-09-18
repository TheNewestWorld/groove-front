import classNames from "classnames";
import BottomSheetList from "../BottomSheetList";
import { SelectIcon } from "../../assets/icon";
import useOpen from "../../hooks/useOpen";
import styles from "./SelectCategory.module.scss";
import useCategory from "../../hooks/selectCategory";

export interface Props {
  title?: string;
  className?: string;
  categoryList: string[];
  hasCloseButton?: boolean;
}

const SelectCategory = ({
  className,
  categoryList,
  hasCloseButton,
  title,
}: Props) => {
  const { isOpen, onOpen, onClose } = useOpen();
  const { activeCategory, clickCategory } = useCategory();
  return (
    <div>
      <div className={classNames([className, styles.container, styles.category, styles.category__active])} onClick={onOpen}>
        {activeCategory}
        <SelectIcon className={styles.category__active__icon} />
      </div>
      {isOpen && (
        <BottomSheetList
          title={title}
          hasCloseButton={hasCloseButton}
          list={categoryList}
          activeItem={activeCategory}
          onClick={clickCategory}
          onClose={onClose}
        />
      )}
    </div>
  );
};

export default SelectCategory;
