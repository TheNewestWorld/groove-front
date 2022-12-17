import classNames from "classnames";
import { useRef } from "react";
import { CameraIcon, MicIcon } from "../../../../../assets/icon";
import styles from "./FileUploader.module.scss";

interface Props {
  type: "IMAGE" | "AUDIO";
  onClickFile: (file: File, url: string) => void;
  isDisabled?: boolean;
  className?: string;
}

const FileUploader = ({
  type,
  onClickFile,
  isDisabled = false,
  className,
}: Props) => {
  const fileInput = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        className={styles.hidden}
        type="file"
        accept={
          type === "IMAGE"
            ? "image/jpg,image/png,image/jpeg,image/gif"
            : "audio/*"
        }
        onChange={e => {
          if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
              const imageUrl = reader.result?.toString();
              if (imageUrl) onClickFile(file, imageUrl);
            };
            reader.readAsDataURL(file);
            e.target.value = "";
          }
        }}
        ref={fileInput}
      />
      <div
        className={classNames([className])}
        onClick={() => {
          // TODO: 비활성화시 아이콘 이미지 변경
          if (isDisabled) return;
          fileInput.current?.click();
        }}>
        {type === "IMAGE" ? <CameraIcon /> : <MicIcon />}
      </div>
    </>
  );
};

export default FileUploader;
