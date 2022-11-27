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
    getUserInfo: () => `${BASE_URL}/users/self`,
    setUserInfo: () => `${BASE_URL}/users/self`,
    setUserProfileImage: () => `${BASE_URL}/users/self/profile`,
    sendEmail: () => `${BASE_URL}/mail/change-password`,
    setPassword: () => `${BASE_URL}/users/password`,
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
  comment: {
    createComment: (postId: number) => `${BASE_URL}/community/post/${postId}/comment`,
    getComment: (postId: number) => `${BASE_URL}/community/post/${postId}/comment`,
    modifyComment: (commentId: number) => `${BASE_URL}/community/comment/${commentId}`,
    deleteComment: (commentId: number) => `${BASE_URL}/community/comment/${commentId}`,
  },
  post: {
    createPost: () => `${BASE_URL}/community/post`,
    getPost: (postId: number) => `${BASE_URL}/community/post/${postId}`,
    getPostByCategory: () => `${BASE_URL}/community/post/category`,
    modifyPost: (postId: number) => `${BASE_URL}/community/post/${postId}`,
    deletePost: (postId: number) => `${BASE_URL}/community/post/${postId}`,
  },
};
