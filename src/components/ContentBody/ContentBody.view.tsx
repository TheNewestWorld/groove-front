import classNames from "classnames";
import AudioPlayer from "../AudioPlayer";
import ImageList from "../ImageList";
import styles from "./ContentBody.module.scss";

export interface Props {
  content: string;
  imageList?: { src: string; id: number }[];
  audio?: { title: string; src: string; id: number };
  onClickImage?: (id: number) => void;
  onClickMore?: () => void;
  className?: string;
}

const ContentBody = ({
  content,
  imageList,
  audio,
  onClickImage,
  onClickMore,
  className,
}: Props) => {
  return (
    <div className={classNames([styles.container, className])}>
      <div className={styles.content}>{content}</div>

      {imageList && (
        <ImageList
          imageList={imageList}
          maxCount={3}
          onClickImage={onClickImage}
          onClickMore={onClickMore}
        />
      )}

      {audio && <AudioPlayer {...audio} />}
    </div>
  );
};

export default ContentBody;
