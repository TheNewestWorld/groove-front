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
          type: "GROOVE",
          profileUrl:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          authorities: ["USER"],
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
          type: "GROOVE",
          profileUrl:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          authorities: ["ADMIN"],
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
          type: "GROOVE",
          profileUrl:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          authorities: ["TRAINER"],
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
          type: "KAKAO",
          profileUrl:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          authorities: ["USER"],
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
          type: "KAKAO",
          profileUrl:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          authorities: ["ADMIN"],
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
          type: "KAKAO",
          profileUrl:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          authorities: ["TRAINER"],
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
          type: "NAVER",
          profileUrl:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          authorities: ["USER"],
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
          type: "NAVER",
          profileUrl:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          authorities: ["ADMIN"],
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
          type: "NAVER",
          profileUrl:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          authorities: ["TRAINER"],
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
          type: "GOOGLE",
          profileUrl:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          authorities: ["USER"],
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
          type: "GOOGLE",
          profileUrl:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          authorities: ["ADMIN"],
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
          type: "GOOGLE",
          profileUrl:
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
          authorities: ["TRAINER"],
        },
      })
    );
  }),
};
