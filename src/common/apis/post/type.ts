export type GetPostResponse = {
  id: number;
  title: string;
  content: string;
  userId: number;
  nickname: string;
  profileUri: string;
  likeFlag: boolean;
  likeCount: number;
  commentCount: number;
  categoryId: number;
  authority: boolean;
  attachmentUris: string[];
};
