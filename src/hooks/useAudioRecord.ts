import { useState, useCallback } from "react";

const useAudioRecord = () => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [recordingTime, setRecordingTime] = useState<number>(0);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>();
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer>();
  const [recordingBlob, setRecordingBlob] = useState<Blob>();

  const _startTimer: () => void = () => {
    const interval = setInterval(() => {
      setRecordingTime(time => time + 1);
    }, 1000);
    setTimerInterval(interval);
  };

  const _stopTimer: () => void = () => {
    timerInterval != null && clearInterval(timerInterval);
    setTimerInterval(undefined);
  };

  const startRecording = useCallback(() => {
    if (timerInterval != null) return;

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(stream => {
        setIsRecording(true);
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
    setIsRecording(false);
    setIsPaused(false);
  };

  return {
    startRecording,
    stopRecording,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
  };
};

export default useAudioRecord;
