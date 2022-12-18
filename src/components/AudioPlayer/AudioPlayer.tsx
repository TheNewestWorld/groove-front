import { useRef } from "react";
import { GreyDeleteCircle, PlayIcon } from "../../assets/icon";
import useOpen from "../../hooks/useOpen";
import styles from "./AudioPlayer.module.scss";

interface Props {
  title?: string;
  src: string;
  canDelete?: boolean;
  onClickDelete?: () => void;
}

const AudioPlayer = ({
  title,
  src,
  canDelete = false,
  onClickDelete,
}: Props) => {
  const playerRef = useRef<HTMLAudioElement>(null);
  const { isOpen: isPlaying, onOpen: onPlay, onClose: onPause } = useOpen();

  return (
    <div className={styles.container}>
      <audio controls src={src} ref={playerRef} className={styles.audio} />
      {canDelete && (
        <GreyDeleteCircle
          className={styles.delete}
          onClick={() => onClickDelete?.()}
        />
      )}

      {/* NOTE: Custom 오디오 플레이어로 변경하는 작업이 필요합니다. 
      <div className={styles.title}>{title}</div>
      <div className={styles.player}>
        {isPlaying ? (
          <div
            onClick={() => {
              playerRef.current?.pause();
              onPause();
            }}>
            일시정지
          </div>
        ) : (
          <PlayIcon
            onClick={() => {
              onPlay();
              playerRef.current?.play();
            }}
          />
        )}
      </div> */}
    </div>
  );
};

export default AudioPlayer;
