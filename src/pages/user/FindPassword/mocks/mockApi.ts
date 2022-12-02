import { rest } from "msw";
import { apiUrls } from "../../../../common/apis/utils";
import { ApiResponseData } from "../../../../common/configs/axios";

export const 비밀번호설정 = {
  성공: rest.post(apiUrls.users.sendEmail(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<null>>({
        result: "SUCCESS",
      })
    );
  }),
  실패: rest.post(apiUrls.users.sendEmail(), (_, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json<ApiResponseData<null>>({
        result: "ERROR",
        error: {
          code: "400",
          message: "이메일 발송 실패",
          data: {},
        },
      })
    );
  }),
};
