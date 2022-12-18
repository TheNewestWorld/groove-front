import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type PostQnaBody = {
  title: string;
  content: string;
  image: File | null;
};

export const postQna = ({ title, content, image }: PostQnaBody) => {
  const frm = new FormData();
  const json = {
    title,
    content,
  };
  const blob = new Blob([JSON.stringify(json)], { type: "application/json" });
  frm.append("request", blob);
  image && frm.append("image", image);

  return resultData<null>(
    axios.post(apiUrls.qna.postQna(), frm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  );
};
