import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type PostCategoryBody = {
  name: string;
  categoryGroup: "COMMUNITY" | "TRAINING";
};

export const postCategory = (body: PostCategoryBody) => {
  return resultData<null>(
    axios.post(apiUrls.category.postCategory(), body, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
  );
};
