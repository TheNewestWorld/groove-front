export type GetPostDetailResponse = {
  id: number;
  createdAt: string;
  title: string;
  content: string;
  userId: number;
  nickName: string;
  profileUri: string;
  likeFlag: boolean;
  likeCount: number;
  commentCount: number;
  categoryId: number;
  authority: boolean;
  attachmentUris: {
    id: number;
    type: string;
    src: string;
    title: string;
  }[];
};
