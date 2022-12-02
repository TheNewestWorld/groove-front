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
  attachments: string[]; // multipart 처리
};

export const UpdatePost = (
  { postId }: UpdatePostParams,
  body: UpdatePostBody,
) => {
  return resultData<null>(
    axios.put(apiUrls.post.updatePost(postId), body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  );
};
