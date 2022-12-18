import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type PostReportBody = {
  postId: number;
  reportTargetType: "POST" | "COMMENT";
  reportReasonType:
    | "HARSH_PROFANITY"
    | "FALSE_INFORMATION"
    | "INAPPROPRIATE_CONTENT";
};

export const postReport = (body: PostReportBody) => {
  return resultData<null>(axios.post(apiUrls.reports.postReport(), body));
};
