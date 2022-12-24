import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type UpdateQnAParams = {
  qnaId: number;
};

export type UpdateQnABody = {
  title: string;
  content: string;
  image: File | null;
};

export const updateQnA = (
  { qnaId }: UpdateQnAParams,
  { title, content, image }: UpdateQnABody,
) => {
  const frm = new FormData();
  const json = {
    title,
    content,
  };
  const blob = new Blob([JSON.stringify(json)], { type: "application/json" });
  frm.append("inquiryUpdateRequest", blob);
  image && frm.append("attachments", image);

  return resultData<null>(
    axios.put(apiUrls.qnas.updateQnA(qnaId), frm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  );
};
