import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type PostRecordBody = {
  record: string;
};

export const postRecord = (body: PostRecordBody) => {
  return resultData<null>(axios.post(apiUrls.records.postRecord(), body));
};
