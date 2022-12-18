import { useEffect } from "react";
import { MicButtonIcon, StopRecordingButton } from "../../../../../assets/icon";
import useAudioRecord from "../../hooks/useAudioRecord";

interface Props {
  onRecordingComplete: (audio: Blob) => void;
}

const AudioRecorder = ({ onRecordingComplete }: Props) => {
  const {
    startRecording,
    stopRecording,
    recordingBlob,
    isRecording,
    recordingTime,
    setRecordingBlob,
  } = useAudioRecord();

  useEffect(() => {
    if (onRecordingComplete && recordingBlob) {
      onRecordingComplete(recordingBlob);
      setRecordingBlob(null);
    }
  }, [onRecordingComplete, setRecordingBlob, recordingBlob]);

  return (
    <>
      {!isRecording ? (
        <MicButtonIcon onClick={startRecording} />
      ) : (
        <div>
          <StopRecordingButton onClick={stopRecording} />
        </div>
      )}
    </>
  );
};

export default AudioRecorder;
