import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type PostQnABody = {
  title: string;
  content: string;
  image: File | null;
};

export const postQnA = ({ title, content, image }: PostQnABody) => {
  const frm = new FormData();
  const json = {
    title,
    content,
  };
  const blob = new Blob([JSON.stringify(json)], { type: "application/json" });
  frm.append("request", blob);
  image && frm.append("attachments", image);

  return resultData<null>(
    axios.post(apiUrls.qnas.postQnA(), frm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  );
};
