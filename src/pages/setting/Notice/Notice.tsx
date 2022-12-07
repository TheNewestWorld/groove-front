import { useNavigate } from "react-router-dom";
import BuildPaths from "../../../common/paths";
import SettingListForm from "../../../components/SettingListForm";
import useNotice from "./hooks/useNotice";

const Notice = () => {
  const navigation = useNavigate();

  const { isLoading, isError, settingList } = useNotice();

  if (isLoading) {
    // TODO: 스켈레톤 적용
    return <>Loading...</>;
  }

  if (isError) {
    // TODO: 에러 발생 처리
    return <>에러가 발생했습니다.</>;
  }

  return (
    <SettingListForm
      headerTitle="공지사항"
      settingList={settingList.map((item) => {
        return {
          ...item,
          onClick: () => navigation(BuildPaths.noticeDetail(String(item.id))),
        };
      })}
      onClickBack={() => navigation(-1)}
    />
  );
};

export default Notice;