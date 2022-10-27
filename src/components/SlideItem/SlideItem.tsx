import classNames from "classnames";
import { useRef, useState } from "react";
import { DeleteIcon, PencilIcon } from "../../assets/icon";
import styles from "./SlideItem.module.scss";

export interface Props {
  hasDelete?: boolean;
  hasEdit?: boolean;
  onClickDelete?: () => void;
  onClickEdit?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const SlideItem = ({
  hasDelete = false,
  hasEdit = false,
  onClickDelete,
  onClickEdit,
  children,
  className,
}: Props) => {
  const [startX, setStartX] = useState<number | null>(null);
  const editRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);

  const dragMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (childrenRef.current && startX) {
      const dist = e.pageX - startX;

      if (dist < 0) {
        const count = hasDelete ? 1 : 0;
        if (editRef.current) {
          editRef.current.style.transform = `translateX(${-72 * count}px)`;
        }
        childrenRef.current.style.transform = `translateX(${
          -72 * (hasEdit ? count + 1 : count)
        }px)`;
      } else if (dist > 0) {
        if (editRef.current) {
          editRef.current.style.transform = `translateX(0px)`;
        }
        childrenRef.current.style.transform = `translateX(0px)`;
      }
    }
  };

  return (
    <div
      className={className}
      onMouseDown={(e) => setStartX(e.pageX)}
      onMouseMove={dragMouse}
      onMouseUp={() => setStartX(null)}
    >
      <div className={styles.container}>
        {hasDelete && (
          <div
            className={classNames([styles.option, styles.delete])}
            onClick={onClickDelete}
          >
            <DeleteIcon className={styles.icon} />
          </div>
        )}
        {hasEdit && (
          <div
            ref={editRef}
            className={classNames([styles.option, styles.drag, styles.edit])}
            onClick={onClickEdit}
          >
            <PencilIcon className={styles.icon} />
          </div>
        )}
        <div
          ref={childrenRef}
          className={classNames([styles.drag, styles.children])}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
