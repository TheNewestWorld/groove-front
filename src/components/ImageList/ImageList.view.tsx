import classNames from "classnames";
import { GreyDeleteCircle } from "../../assets/icon";
import styles from "./ImageList.module.scss";

export interface Props {
  imageList: { src: string; id: number }[];
  maxCount?: number;
  onClickImage?: (id: number) => void;
  onClickMore?: () => void;
  className?: string;
  canDelete?: boolean;
  onClickDelete?: (id: number) => void;
}

const ImageList = ({
  imageList,
  maxCount = 4,
  onClickImage,
  onClickMore,
  className,
  canDelete = false,
  onClickDelete,
}: Props) => {
  return (
    <div className={classNames([styles.container, className])}>
      {imageList.slice(0, maxCount).map(({ src, id }) => (
        <div className={styles.image} key={id}>
          <img key={id} onClick={() => onClickImage?.(id)} src={src} alt="" />
          {canDelete && (
            <GreyDeleteCircle
              className={styles.delete}
              onClick={() => onClickDelete?.(id)}
            />
          )}
        </div>
      ))}
      {imageList.length > maxCount && (
        <div className={styles.more} onClick={onClickMore}>
          <img src={imageList[maxCount].src} alt="" />
          <div className={styles.number}>+ {imageList.length - maxCount}</div>
        </div>
      )}
    </div>
  );
};

export default ImageList;
