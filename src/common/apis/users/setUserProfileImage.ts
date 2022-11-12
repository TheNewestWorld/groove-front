import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type SetUserProfileImageBody = {
  profile: string;
};

export const setUserProfileImage = ({ profile }: SetUserProfileImageBody) => {
  return resultData<null>(
    axios.put(apiUrls.users.setUserProfileImage(), profile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  );
};
