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
