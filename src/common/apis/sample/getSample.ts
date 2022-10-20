import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type SampleResponse = {
  id: number;
  sample: string;
};

export const getSample = () => {
  return resultData<SampleResponse>(axios.get(apiUrls.test.getSample()));
};
