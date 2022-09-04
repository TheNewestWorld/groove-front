import classNames from "classnames";
import styles from "./ImageList.module.scss";

export interface Props {
  imageList: { src: string; id: number; }[];
  maxCount?: number;
  onClickImage?: (id: number) => void;
  onClickMore?: () => void;
  className?: string;
}

const ImageList = ({
  imageList,
  maxCount = 4,
  onClickImage,
  onClickMore,
  className,
}: Props) => {
  return (
    <div className={classNames([styles.container, className])}>
      {imageList.slice(0, maxCount).map(({ src, id }) => (
        <img key={id} onClick={() => onClickImage?.(id)} src={src} alt="" />
      ))}
      {imageList.length >= maxCount && (
        <div className={styles.more} onClick={onClickMore}>
          <img src={imageList[maxCount].src} alt="" />
          <div className={styles.number}>+ {imageList.length - maxCount}</div>
        </div>
      )}
    </div>
  );
};

export default ImageList;
