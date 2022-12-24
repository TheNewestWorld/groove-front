import { useNavigate } from "react-router-dom";
import useNotificationList from "./hooks/useNotificationList";
import Header from "../../components/Header";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import PushListView from "./PushList.view";
import { ArrowTailIcon } from "../../assets/icon";
import BuildPaths from "../../common/paths";

const PushList = () => {
  const navigation = useNavigate();
  const { isLoading, isError, notificationList } = useNotificationList();

  if (isLoading || !notificationList) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  const getBuildPath = (
    notificationType: "LIKE" | "COMMENT",
    linkUrl: string,
  ) => {
    const communityId = linkUrl.split("/")[4];

    if (notificationType === "LIKE") {
      return BuildPaths.communityDetail(communityId);
    } else if (notificationType === "COMMENT") {
      return BuildPaths.communityComment(communityId);
    } else {
      return "";
    }
  };

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
          const { notificationType, linkUrl } = notificationList.all.filter(
            notification => notification.id === id,
          )[0];
          navigation(getBuildPath(notificationType, linkUrl));
        }}
      />
    </>
  );
};

export default PushList;
