import AudioPlayer from "../../../../../components/AudioPlayer";
import ImageList from "../../../../../components/ImageList";
import FileUploader from "../FileUploader";

import styles from "./FileInput.module.scss";

type Props = {
  imageList: string[];
  audioUrl: string | null;
  onClickCamera: (image: File, url: string) => void;
  onClickMic: (audio: File, url: string) => void;
  onDeleteImage: (id: number) => void;
  onDeleteAudio: () => void;
};

const FileInput = ({
  imageList,
  audioUrl,
  onClickCamera,
  onClickMic,
  onDeleteImage,
  onDeleteAudio,
}: Props) => {
  return (
    <>
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
    </>
  );
};

export default FileInput;
