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
  frm.append("title", body.title);
  frm.append("content", body.content);
  frm.append("categoryId", body.categoryId.toString());
  // key(attachment) 값 확인 필요
  body.attachments.map((file) => frm.append("attachment", file));

  return resultData<null>(axios.post(apiUrls.post.postPost(), frm, {
    headers: {
      "Content-Type": "multipart/form-data",      
    }
  }));
};

// 객체하나 만들어서 append를 붙여서 바디로 
// 타입이 특수화된것이 있고 거기에 데이터 넣을 떄 append()
// 이거 mock을 짜야댐
