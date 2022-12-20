import { InView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import BuildPaths from "../../../common/paths";
import Loading from "../../../components/Loading";
import SettingListForm from "../../../components/SettingListForm";
import Badge from "./components/Badge";
import useNotice from "./hooks/useNotice";

const Notice = () => {
  const navigation = useNavigate();

  const {
    isLoading,
    isError,
    settingList,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useNotice();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    // TODO: 에러 발생 처리
    return <>에러가 발생했습니다.</>;
  }

  return (
    <>
      <SettingListForm
        headerTitle="공지사항"
        settingList={settingList.map(({ id, isNew, ...item }) => {
          return {
            ...item,
            onClick: () => navigation(BuildPaths.noticeDetail(String(id))),
            badge: isNew ? <Badge type="NEW" /> : undefined,
          };
        })}
        emptyMessage="등록된 공지사항이 없어요."
        onClickBack={() => navigation(-1)}
      />
      <InView
        skip={!hasNextPage || isFetchingNextPage}
        onChange={(inView) => {
          if (inView && hasNextPage) {
            fetchNextPage();
          }
        }}
      />
    </>
  );
};

export default Notice;
