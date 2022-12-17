import classNames from "classnames";
import BottomSheetList from "../BottomSheetList";
import { SelectIcon } from "../../assets/icon";
import useOpen from "../../hooks/useOpen";
import styles from "./SelectCategory.module.scss";

export interface Props {
  title?: string;
  className?: string;
  activeCategory: string;
  placeholder?: string;
  categoryList: string[];
  hasCloseButton?: boolean;
  onClickCategory: (category: string) => void;
}

const SelectCategory = ({
  title,
  className,
  activeCategory,
  onClickCategory,
  placeholder = "",
  categoryList,
  hasCloseButton,
}: Props) => {
  const { isOpen, onOpen, onClose } = useOpen();
  return (
    <>
      <div
        className={classNames([
          className,
          styles.container,
          styles.category,
          activeCategory !== "" && styles.active,
        ])}
        onClick={onOpen}>
        {activeCategory === "" ? placeholder : activeCategory}
        <SelectIcon className={styles.icon} />
      </div>
      {isOpen && (
        <BottomSheetList
          title={title}
          hasCloseButton={hasCloseButton}
          list={categoryList}
          activeItem={activeCategory}
          onClick={onClickCategory}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default SelectCategory;
