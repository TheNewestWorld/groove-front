import styles from "./ImageDetail.module.scss";
import { CloseIcon, ArrowLeftIcon, ArrowRightIcon } from "../../assets/icon";
import CircleButton from "../../components/CircleButton";

export interface Props {
  content: string;
  src?: string;
  imageList?: { src: string; id: number; }[];
  onClickClose?: () => void;
  leftArrowClick?: () => void;
  rightArrowClick?: () => void;
  total?: number;
  imageIndex?: number;
}

const ImageDetailView = ({
  imageList,
  imageIndex,
  onClickClose,
  leftArrowClick,
  rightArrowClick,
  src,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div />
        <div className={styles.title}>{imageIndex + "/" + imageList?.length}</div>
        <CloseIcon className={styles.icon} onClick={onClickClose} />
      </div>
      <img src={src} className={styles.image} alt="" />
      {((imageIndex === imageList?.length) || (imageIndex !== 1)) &&
        (<CircleButton
          className={styles.prev}
          icon={<ArrowLeftIcon onClick={leftArrowClick} />}
        />)
      }
      {((imageIndex === 1) || (imageIndex !== imageList?.length)) &&
        (<CircleButton
          className={styles.next}
          icon={<ArrowRightIcon onClick={rightArrowClick} />}
        />)
      }
      <div className={styles.bottom}>
      </div>
    </div>
  );
};

export default ImageDetailView;
