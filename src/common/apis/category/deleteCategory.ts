import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type DeleteCategoryParams = {
  categoryId: number;
};

export const deleteCategory = ({ categoryId }: DeleteCategoryParams) => {
  return resultData<null>(
    axios.delete(apiUrls.category.deleteCategory(categoryId)),
  );
};
