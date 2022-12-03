import { format } from "date-fns";
import { rest } from "msw";
import { NoticeDetailResponse } from "../../../../common/apis/notice";
import { apiUrls } from "../../../../common/apis/utils";
import { ApiResponseData } from "../../../../common/configs/axios";

const NOTICE_ID = 0;

export const 공지사항_상세 = {
  성공: rest.get(apiUrls.notices.getNoticeDetail(NOTICE_ID), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<NoticeDetailResponse>>({
        result: "SUCCESS",
        data: {
          title: "공지사항 제목",
          content: "공지사항 내용 입니다.",
          createdAt: format(new Date(), "yyyy-MM-dd"),
        },
      })
    );
  }),
  실패: rest.get(apiUrls.notices.getNoticeDetail(NOTICE_ID), (_, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json<ApiResponseData<NoticeDetailResponse>>({
        result: "ERROR",
        error: {
          code: "500",
          message: "공지사항 상세 조회 실패",
          data: {},
        },
      })
    );
  }),
};
