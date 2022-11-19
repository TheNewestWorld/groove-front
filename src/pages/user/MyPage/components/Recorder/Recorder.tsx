import FloatingLayout from "../../../../../layout/FloatingLayout";
import AudioRecorder from "../../../../../components/AudioRecorder";
import styles from "./Recorder.module.scss";

export interface Props {
  onRecordingComplete?: (blob: Blob) => void;
}

const Recorder = ({ onRecordingComplete }: Props) => {
  return (
    <>
      <FloatingLayout className={styles.recording_on}>
        <AudioRecorder onRecordingComplete={onRecordingComplete} />
      </FloatingLayout>
    </>
  );
};

export default Recorder;
