import { useNavigate } from "react-router-dom";
import BuildPaths from "../../../common/paths";
import SettingListForm from "../../../components/SettingListForm";

const Setting = () => {
  const navigation = useNavigate();

  return (
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
        { title: "로그아웃", onClick: () => alert("TODO") },
        { title: "회원탈퇴", onClick: () => alert("TODO") },
      ]}
      onClickBack={() => navigation(BuildPaths.mypage("RECORD"))}
    />
  );
};

export default Setting;
