import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlackCheckIcon } from "../../../assets/icon";
import BuildPaths from "../../../common/paths";
import Dialog from "../../../components/Dialog";
import RoundButton from "../../../components/RoundButton";
import SettingListForm from "../../../components/SettingListForm";
import styles from "./Setting.module.scss";

const Setting = () => {
  const navigation = useNavigate();

  const [showLogoutDialog, setLogoutDialog] = useState<boolean>(false);
  const [showSignOutDialog, setSignOutDialog] = useState<boolean>(false);
  const [showGoodByeDialog, setGoodByeDialog] = useState<boolean>(false);

  const signOut = () => {
    // TODO
  };

  const logout = () => {
    // TODO
  };

  return (
    <>
      <SettingListForm
        headerTitle="설정"
        settingList={[
          {
            title: "공지사항",
            onClick: () => navigation(BuildPaths.noticeList()),
          },
          {
            title: "문의하기",
            onClick: () => navigation(BuildPaths.qnaList()),
          },
          {
            title: "칭찬/불만/제안하기",
            onClick: () => navigation(BuildPaths.vocForm()),
          },
          { title: "로그아웃", onClick: () => setLogoutDialog(true) },
          { title: "회원탈퇴", onClick: () => setSignOutDialog(true) },
        ]}
        onClickBack={() => navigation(BuildPaths.mypage("RECORD"))}
      />

      {showLogoutDialog && (
        <Dialog title="정말 로그아웃 하시겠어요?">
          <RoundButton
            className={styles.dialogButton}
            colorTheme="secondary"
            onClick={() => setLogoutDialog(false)}
          >
            아니요
          </RoundButton>
          <RoundButton
            className={styles.dialogButton}
            colorTheme="dark"
            onClick={() => setLogoutDialog(false)}
          >
            네, 할게요
          </RoundButton>
        </Dialog>
      )}

      {showSignOutDialog && (
        <Dialog title="정말 탈퇴하시겠어요?">
          <RoundButton
            className={styles.dialogButton}
            colorTheme="secondary"
            onClick={() => setSignOutDialog(false)}
          >
            아니요
          </RoundButton>
          <RoundButton
            className={styles.dialogButton}
            colorTheme="dark"
            onClick={() => {
              setSignOutDialog(false);
              setGoodByeDialog(true);
            }}
          >
            네, 할게요
          </RoundButton>
        </Dialog>
      )}

      {showGoodByeDialog && (
        <Dialog
          title="정상적으로 처리되었어요."
          icon={<BlackCheckIcon className={styles.icon} />}
        >
          <div className={styles.description}>
            다음에 찾아주실때에는 더욱 발전한 모습으로 기다리고 있겠습니다.
          </div>
        </Dialog>
      )}
    </>
  );
};

export default Setting;
