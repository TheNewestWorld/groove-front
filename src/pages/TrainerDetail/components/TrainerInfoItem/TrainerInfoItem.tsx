import TrainerInfoLayout from "../TrainerInfoLayout";
import styles from "./TrainerInfoItem.module.scss";

export interface Props {
  title: string;
  infoTextOrItems: string[];
  infoType?: "TEXT" | "LIST";
  mediaList?: string[];
  mediaType?: "IMAGE" | "VIDEO";
}

const TrainerInfoItem = ({
  title,
  infoTextOrItems,
  infoType = "TEXT",
  mediaList,
  mediaType,
}: Props) => {
  return (
    <TrainerInfoLayout title={title}>
      <div>
        {infoType &&
          infoType == "LIST" &&
          infoTextOrItems.map(item => (
            <div className={styles.infoList}>{item}</div>
          ))}
        {infoType && infoType == "TEXT" && (
          <div className={styles.infoText}>{infoTextOrItems[0]}</div>
        )}
      </div>
      {mediaType && mediaList && (
        <div className={styles.mediaContainer}>
          {mediaType == "IMAGE" && <img src={mediaList[0]} />}
          {mediaType == "VIDEO" && <img src={mediaList[0]} />}
        </div>
      )}
    </TrainerInfoLayout>
  );
};

export default TrainerInfoItem;
