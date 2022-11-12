import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type SetRecordTitleQueryParams = {
  recordId: number;
};

export type SetRecordTitleBody = {
  recordName: string;
};

export const setRecordList = ({
  recordId,
  recordName,
}: SetRecordTitleQueryParams & SetRecordTitleBody) => {
  return resultData<null>(
    axios.put(apiUrls.records.setRecordTitle(recordId), { recordName })
  );
};
