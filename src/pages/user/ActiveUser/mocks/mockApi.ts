import { rest } from "msw";
import { apiUrls } from "../../../../common/apis/utils";
import { ApiResponseData } from "../../../../common/configs/axios";

const SESSION_KEY = "sessionKey";

export const 유저_활성화 = {
  성공: rest.post(apiUrls.auth.activeUser(SESSION_KEY), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<null>>({
        result: "SUCCESS",
      })
    );
  }),
};
