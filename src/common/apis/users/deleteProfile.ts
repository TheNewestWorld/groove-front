import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";


export const deleteProfile = () => {
  return resultData<null>(
    axios.delete(apiUrls.users.deleteProfile())
  );
};
