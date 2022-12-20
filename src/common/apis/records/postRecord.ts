import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type PostRecordBody = {
  record: Blob;
};

export const postRecord = ({ record }: PostRecordBody) => {
  const frm = new FormData();
  frm.append("record", record);

  return resultData<null>(
    axios.post(apiUrls.records.postRecord(), frm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  );
};
