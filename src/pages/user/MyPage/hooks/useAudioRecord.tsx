import { useCallback, useState } from "react";

const useAudioRecord = () => {
  const [isRecording, setRecording] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [recordingTime, setRecordingTime] = useState<number>(0);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>();
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer>();
  const [recordingBlob, setRecordingBlob] = useState<Blob | null>(null);

  const _startTimer = () => {
    const interval = setInterval(() => {
      setRecordingTime(time => time + 1);
    }, 1000);
    setTimerInterval(interval);
  };

  const _stopTimer = () => {
    timerInterval && clearInterval(timerInterval);
    setTimerInterval(undefined);
  };

  const startRecording = useCallback(() => {
    if (timerInterval != null) {
      return;
    }

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(stream => {
        setRecording(true);
        const recorder: MediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
        recorder.start();
        _startTimer();

        recorder.addEventListener("dataavailable", event => {
          setRecordingBlob(event.data);
          recorder.stream.getTracks().forEach(t => t.stop());
          setMediaRecorder(null);
        });
      })
      .catch(error => console.log(error));
  }, [timerInterval]);

  const stopRecording = () => {
    mediaRecorder?.stop();
    _stopTimer();
    setRecordingTime(0);
    setRecording(false);
    setIsPaused(false);
  };

  return {
    startRecording,
    stopRecording,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    setRecordingBlob
  };
};

export default useAudioRecord;
