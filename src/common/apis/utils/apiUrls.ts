import { BASE_URL } from "./constants";

export const apiUrls = {
  test: {
    getSample: () => `${BASE_URL}/sample`,
  },
  auth: {
    signIn: () => `${BASE_URL}/auth/login`,
    refreshToken: () => `${BASE_URL}/auth/refresh`,
    signOut: () => `${BASE_URL}/auth/logout`,
  },
};
