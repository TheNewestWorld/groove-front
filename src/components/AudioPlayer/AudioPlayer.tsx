import { useRef } from "react";
import { PlayIcon } from "../../assets/icon";
import useOpen from "../../hooks/useOpen";
import styles from "./AudioPlayer.module.scss";

interface Props {
  title: string;
  src: string;
}

const AudioPlayer = ({ title, src }: Props) => {
  const playerRef = useRef<HTMLAudioElement>(null);
  const { isOpen: isPlaying, onOpen: onPlay, onClose: onPause } = useOpen();

  return (
    <div className={styles.container}>
      {/* <audio src={src} ref={playerRef} /> */}
      <div className={styles.title}>{title}</div>
      <div className={styles.player}>
        {isPlaying ? (
          <div onClick={onPause}>일시정지</div>
        ) : (
          <PlayIcon onClick={onPlay} />
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
