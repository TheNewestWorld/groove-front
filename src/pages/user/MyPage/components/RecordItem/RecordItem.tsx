import { format } from "date-fns";
import classNames from "classnames";
import { DeleteIcon, PlayIcon, StopIcon } from "../../../../../assets/icon";
import styles from "./RecordItem.module.scss";

interface Props {
  id: number;
  title: string;
  date: Date;
  length: string;
  url: string;
  isOpen: boolean;
  isPlaying: boolean;
  onClick: (id: number, url: string) => void;
  onPlayRecord: () => void;
  onPauseRecord: () => void;
  onDelete: (id: number) => void;
}

const RecordItem = ({
  id,
  title,
  date,
  length,
  url,
  isOpen,
  isPlaying,
  onClick,
  onPlayRecord,
  onPauseRecord,
  onDelete,
}: Props) => {
  return (
    <div
      className={classNames([
        styles.container,
        isOpen ? styles.container_open : styles.container_close,
      ])}
      onClick={() => onClick(id, url)}>
      {!isOpen ? (
        <>
          <div>
            <div className={styles.title}>{title}</div>
            <div className={styles.date}>{format(date, "yyyy. M. d")}</div>
          </div>
          <div className={styles.length}>{length}</div>
        </>
      ) : (
        <>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>{format(date, "yyyy. M. d")}</div>
          <div className={styles.icons}>
            {isPlaying ? (
              <StopIcon
                onClick={e => {
                  e.stopPropagation();
                  onPauseRecord();
                }}
              />
            ) : (
              <PlayIcon
                onClick={e => {
                  e.stopPropagation();
                  onPlayRecord();
                }}
              />
            )}
            <DeleteIcon
              onClick={e => {
                e.stopPropagation();
                onDelete(id);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default RecordItem;
