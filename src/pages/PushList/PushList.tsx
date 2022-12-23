import { useNavigate } from "react-router-dom";
import useNotificationList from "./hooks/useNotificationList";
import Header from "../../components/Header";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import PushListView from "./PushList.view";
import { ArrowTailIcon } from "../../assets/icon";

const PushList = () => {
  const navigation = useNavigate();
  const { isLoading, isError, notificationList } = useNotificationList();

  if (isLoading || !notificationList) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header
        title="알림"
        left={<ArrowTailIcon />}
        onClickLeft={() => navigation(-1)}
      />
      <PushListView
        monthList={notificationList.monthList}
        pastList={notificationList.pastList}
        emptyText="아직 전해드릴 소식이 없어요."
        onClickItem={(id: number) => {
          // TODO: Navigation 추가 핊요. (서버에서 내려오는 linkUrl, notificationType 형태 변경 및 합의 필요)
        }}
      />
    </>
  );
};

export default PushList;
