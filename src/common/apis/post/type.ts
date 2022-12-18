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
  attachments: {
    id: number;
    fileType: "POST_RECORD" | "POST_IMAGE";
    uri: string;
    fileName: string;
  }[];
};
