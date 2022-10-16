import { BASE_URL } from "./constants";

export const apiUrls = {
  user: {
    signUp: () => `${BASE_URL}/users/register`,
    getSign: () => `${BASE_URL}/users/self`,
  },
};
