import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type GetNotificationListQueryParams = {
  page: number;
  size: number;
};

export type GetNotificationListResponse = {
  page: number;
  hasNext: number;
  contents: {
    id: number;
    content: string;
    notificationType: "COMMENT" | "LIKE";
    readFlag: boolean;
    deleteFlag: boolean;
    linkUrl: string;
    userImage: string;
    createdAt: string;
  }[];
};

export const getNotificationList = (params: GetNotificationListQueryParams) => {
  return resultData<GetNotificationListResponse>(
    axios.get(apiUrls.notification.getNotificationList(), { params: params }),
  );
};
