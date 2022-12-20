import { useEffect, useState } from "react";
import BottomSheet from "../BottomSheet";
import BottomSheetList from "../BottomSheetList";
import RoundButton from "../RoundButton";

import styles from "./ReportBottomSheet.module.scss";

type ReasonType =
  | "HARSH_PROFANITY"
  | "FALSE_INFORMATION"
  | "INAPPROPRIATE_CONTENT";

const reportReason: {
  label: string;
  key: ReasonType;
}[] = [
  {
    label: "거친 욕설을 사용했어요.",
    key: "HARSH_PROFANITY",
  },

  {
    label: "거짓 정보를 담고있어요.",
    key: "FALSE_INFORMATION",
  },
  {
    label: "음란한 내용을 담고있어요.",
    key: "INAPPROPRIATE_CONTENT",
  },
];

type Props = {
  isShow: boolean;
  submitReport: (label: ReasonType) => void;
  onClickClose: () => void;
};

const ReportBottomSheet = ({ isShow, submitReport, onClickClose }: Props) => {
  const [showReportOption, setReportOption] = useState<boolean>(false);
  const [showConfirm, setComfirm] = useState<boolean>(false);
  const [reason, setReason] = useState<ReasonType | null>(null);

  const inProgress = isShow || showReportOption || showConfirm;

  useEffect(() => {
    if (isShow) {
      setReportOption(true);
    }
  }, [isShow]);

  if (!inProgress) {
    return <></>;
  }

  return (
    <>
      {showReportOption && (
        <BottomSheetList
          title="신고 사유를 알려주세요."
          list={reportReason.map(({ label }) => label)}
          onClose={() => {
            setReportOption(false);
            onClickClose();
          }}
          onClick={(value) => {
            setReason(
              reportReason.filter(({ label }) => label === value)[0].key
            );
            setComfirm(true);
          }}
        />
      )}
      <BottomSheet
        isShow={showConfirm}
        title="이 게시물을 정말 신고하시겠어요?"
        onClose={() => setComfirm(false)}
        hasCloseButton={false}
      >
        <div className={styles.description}>
          운영정책에 따라 신고 사유에 해당하는지 검토 후 처리 될 예정이에요.
        </div>
        <div className={styles.buttonContainer}>
          <RoundButton
            className={styles.button}
            colorTheme="secondary"
            onClick={() => {
              setComfirm(false);
              onClickClose();
            }}
          >
            아니요
          </RoundButton>
          <RoundButton
            className={styles.button}
            colorTheme="dark"
            onClick={() => {
              submitReport(reason as ReasonType);
              setComfirm(false);
            }}
          >
            네, 신고할게요
          </RoundButton>
        </div>
      </BottomSheet>
    </>
  );
};

export default ReportBottomSheet;
