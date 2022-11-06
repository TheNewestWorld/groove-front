import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type DeleteRecordParams = {
  recordId: number;
};

export const deleteRecord = ({ recordId }: DeleteRecordParams) => {
  return resultData<null>(axios.delete(apiUrls.records.deleteRecord(recordId)));
};
