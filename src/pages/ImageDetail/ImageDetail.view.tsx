import styles from "./ImageDetail.module.scss";
import classNames from "classnames";
import { CloseIcon, ArrowLeftIcon, ArrowRightIcon } from "../../assets/icon";
import CircleButton from "../../components/CircleButton";
import { useState } from "react";

export interface Props {
  imageList: { src: string; id: number }[];
  imageIndex: number;
  onClickClose?: () => void;
  className?: string;
}

const ImageDetailView = ({
  imageList,
  imageIndex,
  onClickClose,
  className,
}: Props) => {
  const [index, setIndex] = useState<number>(imageIndex);

  return (
    <div className={classNames([styles.container, className])}>
      <div className={styles.header}>
        <div className={styles.title}>
          {index + 1} / {imageList.length}
        </div>
        <CloseIcon className={styles.icon} onClick={onClickClose} />
      </div>

      <img src={imageList[index].src} className={styles.image} alt="" />

      <CircleButton
        className={styles.prev}
        icon={
          <ArrowLeftIcon
            onClick={() =>
              setIndex(index - 1 < 0 ? imageList.length - 1 : index - 1)
            }
          />
        }
      />

      <CircleButton
        className={styles.next}
        icon={
          <ArrowRightIcon
            onClick={() =>
              setIndex(index + 1 >= imageList.length ? 0 : index + 1)
            }
          />
        }
      />
    </div>
  );
};

export default ImageDetailView;
