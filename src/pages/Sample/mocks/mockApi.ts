import { rest } from "msw";
import { SampleResponse } from "../../../common/apis/sample";
import { apiUrls } from "../../../common/apis/utils";
import { ApiResponseData } from "../../../common/configs/axios";

export const 샘플 = {
  A: rest.get(apiUrls.test.getSample(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<SampleResponse>>({
        result: "SUCCESS",
        data: {
          id: 1,
          sample: "A",
        },
      })
    );
  }),
  B: rest.get(apiUrls.test.getSample(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<SampleResponse>>({
        result: "SUCCESS",
        data: {
          id: 1,
          sample: "B",
        },
      })
    );
  }),
};
