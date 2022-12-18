import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type PostPostBody = {
  title: string;
  content: string;
  categoryId: number;
  attachments: File[]; // multipart 처리
};

export const postPost = ({
  title,
  content,
  categoryId,
  attachments,
}: PostPostBody) => {
  const frm = new FormData();
  const json = {
    title,
    content,
    categoryId,
  };
  const blob = new Blob([JSON.stringify(json)], { type: "application/json" });
  frm.append("request", blob);
  attachments.map(file => frm.append("attachments", file));

  return resultData<null>(
    axios.post(apiUrls.post.postPost(), frm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  );
};
