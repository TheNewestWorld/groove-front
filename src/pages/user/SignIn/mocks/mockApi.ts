import { rest } from "msw";
import { SignInResponse } from "../../../../common/apis/auth";
import { apiUrls } from "../../../../common/apis/utils";
import { ApiResponseData } from "../../../../common/configs/axios";

export const 로그인 = {
  성공: rest.post(apiUrls.auth.signIn(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<SignInResponse>>({
        result: "SUCCESS",
        data: {
          accessToken: "__ACCESS_TOKEN__",
          refreshToken: "__REFRESH_TOKEN__",
        },
      })
    );
  }),
  실패: rest.post(apiUrls.auth.signIn(), (_, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json<ApiResponseData<SignInResponse>>({
        result: "ERROR",
        error: {
          code: "400",
          message: "로그인 실패",
          data: {},
        },
      })
    );
  }),
};
