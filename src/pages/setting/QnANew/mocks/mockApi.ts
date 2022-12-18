import { rest } from "msw";
import { apiUrls } from "../../../../common/apis/utils";
import { ApiResponseData } from "../../../../common/configs/axios";

export const QnA작성 = {
  성공: rest.post(apiUrls.qna.postQna(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<null>>({
        result: "SUCCESS",
      })
    );
  }),
  실패: rest.post(apiUrls.qna.postQna(), (_, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json<ApiResponseData<null>>({
        result: "ERROR",
        error: {
          code: "400",
          message: "QnA 작성 실패",
          data: {},
        },
      })
    );
  }),
};
