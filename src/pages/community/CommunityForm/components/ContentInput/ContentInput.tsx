import AudioPlayer from "../../../../../components/AudioPlayer";
import ImageList from "../../../../../components/ImageList";
import FileUploader from "../FileUploader";
import styles from "./ContentInput.module.scss";

interface Props {
  value: string;
  imageList: string[];
  audioUrl: string | null;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCamera: (image: File, url: string) => void;
  onClickMic: (audio: File, url: string) => void;
  onDeleteImage: (id: number) => void;
  onDeleteAudio: () => void;
}

const ContentInput = ({
  value,
  imageList,
  audioUrl,
  onChange,
  onClickCamera,
  onClickMic,
  onDeleteImage,
  onDeleteAudio,
}: Props) => {
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
        {audioUrl && (
          <AudioPlayer
            src={audioUrl}
            canDelete={true}
            onClickDelete={() => onDeleteAudio()}
          />
        )}
        <ImageList
          className={styles.imageList}
          imageList={imageList.map((image, idx) => {
            return {
              src: image,
              id: idx,
            };
          })}
          canDelete
          maxCount={imageList.length}
          onClickDelete={onDeleteImage}
        />
        <FileUploader
          type="IMAGE"
          onClickFile={onClickCamera}
          className={styles.button}
        />
        <FileUploader
          type="AUDIO"
          isDisabledMic={audioUrl != null}
          onClickFile={onClickMic}
          className={styles.button}
        />
      </div>
    </div>
  );
};

export default ContentInput;
