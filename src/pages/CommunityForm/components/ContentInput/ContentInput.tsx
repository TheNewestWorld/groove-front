import { CameraIcon, MicIcon } from "../../../../assets/icon";
import ImageList from "../../../../components/ImageList";
import styles from "./ContentInput.module.scss";

interface Props {
  value: string;
  imageList: [];
  audioList: [];
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ContentInput = ({ value, imageList, audioList, onChange }: Props) => {
  const onClickCamera = () => alert("TODO");
  const onClickMic = () => alert("TODO");

  return (
    <div className={styles.container}>
      <div className={styles.label}>내용</div>
      {/* TODO: 내용 박스 사이즈 유동적인지 테스트 후 수정 */}
      <div className={styles.input}>
        <textarea
          value={value}
          name="content"
          onChange={onChange}
          placeholder="내용을 입력해주세요."
        />
        <ImageList
          className={styles.imageList}
          imageList={imageList}
          canDelete
          maxCount={imageList.length}
        />
        {/* TODO: 오디오 리스트 추가 */}
        <div className={styles.button} onClick={onClickCamera}>
          <CameraIcon />
        </div>
        <div className={styles.button} onClick={onClickMic}>
          <MicIcon />
        </div>
      </div>
    </div>
  );
};

export default ContentInput;
