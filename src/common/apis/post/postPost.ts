import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type PostPostBody = {
  title: string;
  content: string;
  categoryId: number;
  attachments: File[]; // multipart 처리
};

export const postPost = (body: PostPostBody) => {
  const frm = new FormData();
  const json = {
    title: body.title,
    content: body.content,
    categoryId: body.categoryId
  }
  const blob = new Blob([JSON.stringify(json)], { type: "application/json" });
  frm.append("request", blob);
  body.attachments.map(file => frm.append("attachments", file));

  return resultData<null>(axios.post(apiUrls.post.postPost(), frm, {
    headers: {
      "Content-Type": "multipart/form-data",      
    }
  }));
};
