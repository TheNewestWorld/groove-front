import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type SetUserProfileImageBody = {
  profile: File | null;
};

export const setUserProfileImage = ({ profile }: SetUserProfileImageBody) => {
  if (!profile) {
    return;
  }

  const frm = new FormData();
  frm.append("profile", profile);

  return resultData<null>(
    axios.put(apiUrls.users.setUserProfileImage(), frm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  );
};
