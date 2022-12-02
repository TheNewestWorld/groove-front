import axios from "axios";
import { resultData } from "../../configs/axios";
import { apiUrls } from "../utils";

export type SendEmailBody = {
  email: string;
};

export const sendEmail = (body: SendEmailBody) => {
  return resultData<null>(axios.post(apiUrls.users.sendEmail(), body));
};
