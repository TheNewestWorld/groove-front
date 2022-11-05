import { useEffect } from "react";
import useAudioRecord from "../../hooks/useAudioRecord";
import { MicButtonIcon, StopRecordingButton } from "../../assets/icon";
import styles from "./AudioRecorder.module.scss";

export interface Props {
  onRecordingComplete?: (blob: Blob) => void;
}

const AudioRecorder = ({ onRecordingComplete }: Props) => {
  const {
    startRecording,
    stopRecording,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useAudioRecord();

  useEffect(() => {
    if (onRecordingComplete && recordingBlob) {
      onRecordingComplete(recordingBlob);
    }
  }, [recordingBlob]);

  return (
    <>
      {isRecording ? (
        <div className={styles.container}>
          <div className={styles.item}></div>
          <div className={styles.body}>
            <div className={styles.title}>새로운 녹음중...</div>
            <div className={styles.time}>
              {Math.floor(recordingTime / 60)}:
              {String(recordingTime % 60).padStart(2, "0")}
            </div>
          </div>
          <div className={styles.item}>
            <StopRecordingButton onClick={stopRecording} />
          </div>
        </div>
      ) : (
        <div>
          <MicButtonIcon onClick={startRecording} />
        </div>
      )}
    </>
  );
};

export default AudioRecorder;
