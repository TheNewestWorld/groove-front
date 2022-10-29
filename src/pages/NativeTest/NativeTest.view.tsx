import AudioRecorder from "../../components/AudioRecorder/AudioRecorder";
import styles from "./NativeTest.module.scss";

const addAudioElement = (blob: Blob) => {
  const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");
  audio.src = url;
  audio.controls = true;
  document.body.appendChild(audio);
};

const NativeTestView = () => {
  return (
    <div className={styles.container}>
      <div> Audio 파일 선택</div>
      <input type="file" name="audio" accept="audio/*"></input>

      <div> image 파일 선택</div>
      <input type="file" name="camera" accept="image/*"></input>
      <div> 카메라 후면 바로 실행</div>
      <input type="file" accept="image/*" capture></input>
      <div> 카메라 전면 바로 실행</div>
      <input type="file" accept="image/*" capture></input>
      <div> 음성 재생 </div>
      <audio
        controls
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">
        <a href="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">
          Download audio
        </a>
      </audio>
      <div> 음성 녹음</div>
      <AudioRecorder onRecordingComplete={blob => addAudioElement(blob)} />
    </div>
  );
};

export default NativeTestView;
