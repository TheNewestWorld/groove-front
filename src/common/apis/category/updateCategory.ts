import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type UpdateCategoryParams = {
  categoryId: number;
};

export type UpdateCategoryBody = {
  name: string;
  categoryGroup: "COMMUNITY" | "TRAINING";
};

export const UpdateCategory = (
  { categoryId }: UpdateCategoryParams,
  body: UpdateCategoryBody,
) => {
  return resultData<null>(
    axios.put(apiUrls.category.updateCategory(categoryId), body, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
  );
};
