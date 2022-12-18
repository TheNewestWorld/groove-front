import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type UpdatePostParams = {
  postId: number;
};

export type UpdatePostBody = {
  title: string;
  content: string;
  categoryId: number;
  attachments: File[];
};

export const updatePost = (
  { postId }: UpdatePostParams,
  { title, content, categoryId, attachments }: UpdatePostBody
) => {
  const frm = new FormData();
  const json = {
    title,
    content,
    categoryId,
  };
  const blob = new Blob([JSON.stringify(json)], { type: "application/json" });
  frm.append("request", blob);
  attachments.map((file) => frm.append("attachments", file));

  return resultData<null>(
    axios.put(apiUrls.post.updatePost(postId), frm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  );
};
