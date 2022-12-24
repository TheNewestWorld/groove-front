import { GetNotificationListResponse } from "../../../common/apis/notification/getNotificationList";
import useNotificationListQuery from "../../../common/queries/notification/useNotificationListQuery";
import { convertToElapsedTime, isThisMonth } from "../helpers";

interface Classification {
  id: number;
  src: string;
  content: string;
  ago: string;
}

const useNotificationList = () => {
  const { isLoading, isError, notificationList } = useNotificationListQuery({
    size: 10,
    page: 0,
  });

  return {
    isLoading,
    isError,
    notificationList: notificationList?.reduce(
      (result, notification) => {
        return isThisMonth(new Date(notification.createdAt))
          ? {
              ...result,
              monthList: [
                ...result.monthList,
                {
                  id: notification.id,
                  src: notification.profileUri,
                  content: notification.content,
                  ago: convertToElapsedTime(new Date(notification.createdAt)),
                },
              ],
              all: [...result.all, notification],
            }
          : {
              ...result,
              pastList: [
                ...result.monthList,
                {
                  id: notification.id,
                  src: notification.profileUri,
                  content: notification.content,
                  ago: convertToElapsedTime(new Date(notification.createdAt)),
                },
              ],
              all: [...result.all, notification],
            };
      },
      {
        monthList: [] as Classification[],
        pastList: [] as Classification[],
        all: [] as GetNotificationListResponse["contents"],
      },
    ),
  };
};

export default useNotificationList;
