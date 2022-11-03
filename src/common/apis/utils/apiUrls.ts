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
  users: {
    signUp: () => `${BASE_URL}/users/register`,
  },
  records: {
    getRecordList: () => `${BASE_URL}/records`,
    postRecord: () => `${BASE_URL}/records`,
    deleteRecord: (recordId: number) => `${BASE_URL}/records/${recordId}`,
  },
};
