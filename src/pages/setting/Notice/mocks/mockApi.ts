import { format } from "date-fns";
import { rest } from "msw";
import { NoticeListResponse } from "../../../../common/apis/notice";
import { apiUrls } from "../../../../common/apis/utils";
import { ApiResponseData } from "../../../../common/configs/axios";

const Content = { title: "공지사항", content: "내용입니다" };

export const 공지사항_목록 = {
  성공: rest.get(apiUrls.notices.getNoticeList(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<NoticeListResponse>>({
        result: "SUCCESS",
        data: {
          page: 0,
          size: 10,
          hasNext: false,
          contents: [...Array(10)].map((_, index) => {
            return {
              id: index,
              title: "작성한 " + Content.title + index,
              content: Content.content + index,
              createdAt: format(new Date(), "yyyy-MM-dd"),
            };
          }),
        },
      })
    );
  }),
  실패: rest.get(apiUrls.notices.getNoticeList(), (_, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json<ApiResponseData<NoticeListResponse>>({
        result: "ERROR",
        error: {
          code: "500",
          message: "목록조회 실패",
          data: {},
        },
      })
    );
  }),
};
