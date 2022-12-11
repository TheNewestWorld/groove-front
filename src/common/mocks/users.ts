import { rest } from "msw";
import { GetUserInfoResponse } from "../apis/users";
import { apiUrls } from "../apis/utils";
import { ApiResponseData } from "../configs/axios";

export const 유저_정보 = {
  그루브_유저: rest.get(apiUrls.users.getUserInfo(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetUserInfoResponse>>({
        result: "SUCCESS",
        data: {
          id: 1,
          email: "groove@groove.com",
          providerType: "GROOVE",
          nickname:"닉네임",
          profileUri:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          role: "USER",
        },
      })
    );
  }),
  그루브_어드민: rest.get(apiUrls.users.getUserInfo(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetUserInfoResponse>>({
        result: "SUCCESS",
        data: {
          id: 1,
          email: "groove@groove.com",
          providerType: "GROOVE",
          nickname: "닉네임",
          profileUri:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          role: "ADMIN",
        },
      })
    );
  }),
  그루브_트레이너: rest.get(apiUrls.users.getUserInfo(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetUserInfoResponse>>({
        result: "SUCCESS",
        data: {
          id: 1,
          email: "groove@groove.com",
          providerType: "GROOVE",
          nickname: "닉네임",
          profileUri:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          role: "TRAINER",
        },
      })
    );
  }),
  카카오_유저: rest.get(apiUrls.users.getUserInfo(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetUserInfoResponse>>({
        result: "SUCCESS",
        data: {
          id: 1,
          email: "groove@groove.com",
          providerType: "KAKAO",
          nickname: "닉네임",
          profileUri:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          role: "USER",
        },
      })
    );
  }),
  카카오_어드민: rest.get(apiUrls.users.getUserInfo(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetUserInfoResponse>>({
        result: "SUCCESS",
        data: {
          id: 1,
          email: "groove@groove.com",
          providerType: "KAKAO",
          nickname: "닉네임",
          profileUri:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          role: "ADMIN",
        },
      })
    );
  }),
  카카오_트레이너: rest.get(apiUrls.users.getUserInfo(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetUserInfoResponse>>({
        result: "SUCCESS",
        data: {
          id: 1,
          email: "groove@groove.com",
          providerType: "KAKAO",
          nickname: "닉네임",
          profileUri:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          role: "TRAINER",
        },
      })
    );
  }),
  네이버_유저: rest.get(apiUrls.users.getUserInfo(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetUserInfoResponse>>({
        result: "SUCCESS",
        data: {
          id: 1,
          email: "groove@groove.com",
          providerType: "NAVER",
          nickname: "닉네임",
          profileUri:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          role: "USER",
        },
      })
    );
  }),
  네이버_어드민: rest.get(apiUrls.users.getUserInfo(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetUserInfoResponse>>({
        result: "SUCCESS",
        data: {
          id: 1,
          email: "groove@groove.com",
          providerType: "NAVER",
          nickname: "닉네임",
          profileUri:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          role: "ADMIN",
        },
      })
    );
  }),
  네이버_트레이너: rest.get(apiUrls.users.getUserInfo(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetUserInfoResponse>>({
        result: "SUCCESS",
        data: {
          id: 1,
          email: "groove@groove.com",
          providerType: "NAVER",
          nickname: "닉네임",
          profileUri:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          role: "TRAINER",
        },
      })
    );
  }),
  구글_유저: rest.get(apiUrls.users.getUserInfo(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetUserInfoResponse>>({
        result: "SUCCESS",
        data: {
          id: 1,
          email: "groove@groove.com",
          providerType: "GOOGLE",
          nickname: "닉네임",
          profileUri:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          role: "USER",
        },
      })
    );
  }),
  구글_어드민: rest.get(apiUrls.users.getUserInfo(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetUserInfoResponse>>({
        result: "SUCCESS",
        data: {
          id: 1,
          email: "groove@groove.com",
          providerType: "GOOGLE",
          nickname: "닉네임",
          profileUri:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          role: "ADMIN",
        },
      })
    );
  }),
  구글_트레이너: rest.get(apiUrls.users.getUserInfo(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetUserInfoResponse>>({
        result: "SUCCESS",
        data: {
          id: 1,
          email: "groove@groove.com",
          providerType: "GOOGLE",
          nickname: "닉네임",
          profileUri:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          role: "TRAINER",
        },
      })
    );
  }),
};
