const BASE_URL = `/api`;

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
    getUserInfo: () => `${BASE_URL}/users/self`,
    setUserInfo: () => `${BASE_URL}/users/self`,
    setUserProfileImage: () => `${BASE_URL}/users/self/profile`,
  },
  records: {
    getRecordList: () => `${BASE_URL}/records`,
    postRecord: () => `${BASE_URL}/records`,
    deleteRecord: (recordId: number) => `${BASE_URL}/records/${recordId}`,
    setRecordTitle: (recordId: number) => `${BASE_URL}/records/${recordId}`,
  },
  like: {
    setCommunityLike: (postId: number) =>
      `${BASE_URL}/community/post/${postId}/like`,
    setCommunityDislike: (postId: number) =>
      `${BASE_URL}/community/post/${postId}/like`,
  },
  myPost: {
    getWrittenPostList: () => `${BASE_URL}/users/self/posts`,
    getLikedPostList: () => `${BASE_URL}/users/self/liked-posts`,
  },
};
