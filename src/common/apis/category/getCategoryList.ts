import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type GetCategoryListParams = {
  categoryGroup: "COMMUNITY" | "TRAINING";
};

export type GetCategoryListResponse = {
  id: number;
  name: string;
  categoryGroup: "COMMUNITY" | "TRAINING";
}[];

export const getCategoryList = ({ categoryGroup }: GetCategoryListParams) => {
  return resultData<GetCategoryListResponse>(
    axios.get(apiUrls.category.getCategoryList(categoryGroup)),
  );
};
