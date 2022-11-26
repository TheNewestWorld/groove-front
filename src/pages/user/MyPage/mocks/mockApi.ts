import { rest } from "msw";
import { GetWrittenPostListResponse } from "../../../../common/apis/myPost";
import { apiUrls } from "../../../../common/apis/utils";
import { ApiResponseData } from "../../../../common/configs/axios";

const Content = {
  userNickname: "유저",
  userProfileUri:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
  title: "게시물",
  content: "내용입니다",
};

export const 작성한_글_목록 = {
  데이터_있음: rest.get(apiUrls.myPost.getWrittenPostList(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetWrittenPostListResponse>>({
        result: "SUCCESS",
        data: {
          page: 0,
          size: 10,
          hasNext: false,
          contents: [...Array(10)].map((_, index) => {
            return {
              postId: index,
              userId: index,
              userNickname: Content.userNickname + index,
              userProfileUri: Content.userProfileUri,
              title: "작성한 " + Content.title + index,
              content: Content.content + index,
              likeCount: index,
              commentCount: index,
              // TODO: liked 추가
            };
          }),
        },
      })
    );
  }),
  데이터_없음: rest.get(apiUrls.myPost.getWrittenPostList(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetWrittenPostListResponse>>({
        result: "SUCCESS",
        data: { page: 0, size: 10, hasNext: false, contents: [] },
      })
    );
  }),
};

export const 좋아요_글_목록 = {
  데이터_있음: rest.get(apiUrls.myPost.getLikedPostList(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetWrittenPostListResponse>>({
        result: "SUCCESS",
        data: {
          page: 0,
          size: 10,
          hasNext: false,
          contents: [...Array(10)].map((_, index) => {
            return {
              postId: index,
              userId: index,
              userNickname: Content.userNickname + index,
              userProfileUri: Content.userProfileUri,
              title: "좋아요 누른 " + Content.title + index,
              content: Content.content + index,
              likeCount: index,
              commentCount: index,
              // TODO: liked 추가
            };
          }),
        },
      })
    );
  }),
  데이터_없음: rest.get(apiUrls.myPost.getLikedPostList(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetWrittenPostListResponse>>({
        result: "SUCCESS",
        data: { page: 0, size: 10, hasNext: false, contents: [] },
      })
    );
  }),
};
