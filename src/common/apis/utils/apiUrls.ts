import { BASE_URL } from "./constants";

export const apiUrls = {
  test: {
    getSample: () => `${BASE_URL}/sample`,
  },
  auth: {
    signIn: () => `${BASE_URL}/auth/login`,
    refreshToken: () => `${BASE_URL}/auth/refresh`,
    logout: () => `${BASE_URL}/auth/logout`,
    activeUser: (sessionKey: string) =>
      `${BASE_URL}/auth/email-authentications/${sessionKey}`,
  },
  users: {
    signUp: () => `${BASE_URL}/users/register`,
    getUserInfo: () => `${BASE_URL}/users/self`,
    setUserInfo: () => `${BASE_URL}/users/self`,
    setUserProfileImage: () => `${BASE_URL}/users/self/profile`,
    sendEmail: () => `${BASE_URL}/mail/change-password`,
    setPassword: () => `${BASE_URL}/users/password`,
    signOut: () => `${BASE_URL}/users/self`,
    deleteProfile: () => `${BASE_URL}/users/self/profile`
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
    getCommentList: (postId: number) =>
      `${BASE_URL}/community/post/${postId}/comment`,
    postComment: (postId: number) =>
      `${BASE_URL}/community/post/${postId}/comment`,
    updateComment: (commentId: number) =>
      `${BASE_URL}/community/comment/${commentId}`,
    deleteComment: (commentId: number) =>
      `${BASE_URL}/community/comment/${commentId}`,
  },
  post: {
    getPostDetail: (postId: number) => `${BASE_URL}/community/post/${postId}`,
    getPostListByCategory: () => `${BASE_URL}/community/post/category`,
    postPost: () => `${BASE_URL}/community/post`,
    updatePost: (postId: number) => `${BASE_URL}/community/post/${postId}`,
    deletePost: (postId: number) => `${BASE_URL}/community/post/${postId}`,
  },
  category: {
    getCategoryList: (categoryGroup: string) =>
      `${BASE_URL}/category/${categoryGroup}`,
    postCategory: () => `${BASE_URL}/category`,
    deleteCategory: (categoryId: number) =>
      `${BASE_URL}/category/${categoryId}`,
    updateCategory: (categoryId: number) =>
      `${BASE_URL}/category/${categoryId}`,
  },
  notices: {
    getNoticeList: () => `${BASE_URL}/notice`,
    getNoticeDetail: (noticeId: number) => `${BASE_URL}/notice/${noticeId}`,
  },
  reports: {
    postReport: () => `${BASE_URL}/reports`,
  },
  qnas: {
    getQnAList: () => `${BASE_URL}/inquiry`,
    getQnADetail: (qnaId: number) => `${BASE_URL}/inquiry/${qnaId}`,
    postQnA: () => `${BASE_URL}/inquiry`,
    updateQnA: (qnaId: number) => `${BASE_URL}/inquiry/${qnaId}`,
    deleteQnA: (qnaId: number) => `${BASE_URL}/inquiry/${qnaId}`,
  },
  notification: {
    getNotificationList: () => `${BASE_URL}/notification/list`,
  },
  voc: {
    postVoC: () => `${BASE_URL}/voc`
  }
};
