import styles from "./ImageDetail.module.scss";
import { CloseIcon, ArrowLeftIcon, ArrowRightIcon } from "../../assets/icon";
import CircleButton from "../../components/CircleButton";
import { useState } from "react";

export interface Props {
  content: string;
  imageList: { src: string; id: number; }[];
  onClickClose?: () => void;
  imageIndex: number;
}

const ImageDetailView = ({
  imageList,
  imageIndex = 0,
  onClickClose,
}: Props) => {
  const [index, setIndex] = useState<number>(imageIndex);
  const prevIndex = () => setIndex(index - 1);
  const nextIndex = () => setIndex(index + 1);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div />
        <div className={styles.title}>{(index + 1) + "/" + imageList.length}</div>
        <CloseIcon className={styles.icon} onClick={onClickClose} />
      </div>
      <img src={imageList[index].src} className={styles.image} />
      {((index === (imageList.length - 1)) || (index !== 0)) &&
        (<CircleButton
          className={styles.prev}
          icon={<ArrowLeftIcon onClick={prevIndex} />}
        />)
      }
      {((index === 0) || (index !== (imageList.length - 1))) &&
        (<CircleButton
          className={styles.next}
          icon={<ArrowRightIcon onClick={nextIndex} />}
        />)
      }
      <div className={styles.bottom}>
      </div>
    </div>
  );
};

export default ImageDetailView;
