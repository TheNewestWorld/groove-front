import { useRef, useState } from "react";
import SlideItem from "../../../../../components/SlideItem";
import RecordItem from "../RecordItem";
import styles from "./RecordSection.module.scss";

interface Props {
  className?: string;
  recordList: {
    id: number;
    title: string;
    date: Date;
    length: string;
    url: string;
  }[];
  onDelete: (id: number) => void;
}

const RecordSection = ({ className, recordList, onDelete }: Props) => {
  const playerRef = useRef<HTMLAudioElement>(null);

  const [selectedAudio, selectAudio] =
    useState<{ id: number; url: string } | null>(null);

  const [isPlaying, setPlaying] = useState<boolean>(false);

  return (
    <div className={className}>
      {recordList.map(item => (
        <SlideItem hasDelete onClickDelete={() => onDelete(item.id)}>
          <RecordItem
            key={item.id}
            {...item}
            isOpen={selectedAudio?.id === item.id}
            isPlaying={isPlaying}
            onClick={(id: number, url: string) => {
              id === selectedAudio?.id
                ? selectAudio(null)
                : selectAudio({
                    id,
                    url,
                  });
            }}
            onDelete={onDelete}
            onPlayRecord={() => {
              playerRef.current?.play();
              setPlaying(true);
            }}
            onPauseRecord={() => {
              playerRef.current?.pause();
              setPlaying(false);
            }}
          />
        </SlideItem>
      ))}
      <audio
        controls
        src={selectedAudio?.url}
        ref={playerRef}
        className={styles.audio}
      />
    </div>
  );
};

export default RecordSection;
