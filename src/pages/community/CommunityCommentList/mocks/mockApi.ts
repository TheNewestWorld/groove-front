import { rest } from "msw";
import { GetCommentListResponse } from "../../../../common/apis/comment";
import { apiUrls } from "../../../../common/apis/utils";
import { ApiResponseData } from "../../../../common/configs/axios";

const MOCK_POST_ID = 0;

export const 댓글_목록 = {
  데이터_있음: rest.get(
    apiUrls.comment.getCommentList(MOCK_POST_ID),
    (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json<ApiResponseData<GetCommentListResponse>>({
          result: "SUCCESS",
          data: [
            {
              id: 0,
              createdAt: "2022-12-03T04:32:39.604Z",
              content:
                "최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까",
              parentId: 0,
              userId: 0,
              nickName: "나는용국",
              profileUri:
                "https://s3-alpha-sig.figma.com/img/cacd/2a30/8061b29eb95bd29149d084a5ff37b215?Expires=1670803200&Signature=OoS-ZDTHg8YFOBi9Fm7Ln3Wnkj9WJypR5FU1CEd8X3dY6sJUFiFjnMEyi16YkMYjLTWas33-zI7NBks6ubqwv7FiX8yk~fj519iAsVCW6HfqzeRfitzeJS6WxdmSYwxl3Kz12L0-edaUo7-Ds2~ZKdGJ4-ieGJnQkcTzs3rSJmKj-pIChHJJ8OGN3OjKJPU8TzBAuXgKBoyVnIh17jnjV6LVYHUoVPtvkODSkm6cYmKYYqbudaODHaB0YcNIYVlMlcMFnLV4fFRLaEM8f8F64SmmHvnbU4DYiFTiX-6xkNxk-TNWtY-l7qIjhn~JIttYD1w-S0ciiGd7V3qt6ohFnw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              authority: true,
              postId: 0,
            },
            {
              id: 1,
              createdAt: "2022-12-03T04:32:39.604Z",
              content: "댓글 더보기 댓글더 보기  댓글더보기댓글 댓글댓글",
              parentId: 0,
              userId: 1,
              nickName: "나는호인",
              profileUri:
                "https://s3-alpha-sig.figma.com/img/315e/d5b7/1bc17a385397ed134298b102acea1bc3?Expires=1670803200&Signature=hrqMk0BWREQsmQOTYyfOxXBwH5l1o25XQyqpEvDKIzX10WUWVgocZ7oHW7WmHSAcD6Uk8zZWG9Vh3xRMziT1OFjKchRdQ9b5JIyuOccENHUPB4jCAZ6Xddj79BioHLvaSVRVOahlL4tR33Vmhy5wcjXsGKDpYdT1hGzzJ6V4hU0N8bjYXsQzAGo2t7NQVOi6F7-rDZZBcCSBo00tmVpW0-5gorYFK2bZQTXMoDEQVnksZm2SxJkvSCm1-sS8-iMBIW4zQup9FK-W7JDDooAf9iG24QEUzZpXM5cTbeDFv~mdLyCyxg2MHl9dY5eFIppf2MSTidCRaR5KwYv8URkE5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              authority: false,
              postId: 0,
            },
            {
              id: 2,
              createdAt: "2022-12-03T04:32:39.604Z",
              content: "댓글 더보기 댓글더 보기  댓글더보기댓글 댓글댓글",
              parentId: 0,
              userId: 2,
              nickName: "나는잉군",
              profileUri:
                "https://s3-alpha-sig.figma.com/img/490b/0cb1/16ab51cdf5cfff1ff989af3aacf1190a?Expires=1670803200&Signature=MlpHwHaaCgTf1HlcvgAQMKK9e5~fOIJKZ-zXUM8HiP5kl-lImYZT2B6Rzl2EcimjEs-jFa9puhK82n7tMiaZDzSknSDbQzyWz5TGoXt6RYDeFEluqe6zE5-KVzd80Z9k~Q8atvgzo78iyUcAxOnygps-ECQqYl7Apw8rIhr973INSmdCbwVXcsJDKq5jc~u~JaksuUGutHGRrFsMYDhOV~nymyG0CY9oGuOdMbmV4PQrEFCXZrG60Y5QeNrwJ7GYytViEcoKkx~moKP16H9EO9bYNU1CAxkOrScO~otjNvHzDxqs9qzB5y250GuEi-1kgokBOIc6Orz0EYar8sUfZQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              authority: false,
              postId: 0,
            },
            {
              id: 3,
              createdAt: "2022-12-03T04:32:39.604Z",
              content:
                "댓글 더보기 댓글더 보기  댓글더보기댓글 더보기댓글더보기댓글더보기댓글더보기댓글 더보",
              parentId: 3,
              userId: 3,
              nickName: "Maximillia",
              profileUri:
                "https://s3-alpha-sig.figma.com/img/f792/1090/e47ab2d0cd722c2b0a5564a3efa60280?Expires=1670803200&Signature=PcTviLXjDZQ6RwlZn-1j03BJHtj6AspK86~2y-QwllPLEmFUHCkEgrN~UCAIzI-pO4120RiOmCz~Jx0jRcspohNMaTqVd2zEOQTMGg67HAUM2ikNB1ZQTqV5L6F-C3rONrffANhpBxNnmyYjHtOUvIhtLXrvWJnzDokvtywJVCanZG4Acxu-sDWy-jtGbaOg1OtNr7aBerw9BKj0Ka~XaQ7sFE-spPZ8H3bWqqJPQY7pR00iZuUg8nxxvoz2DeH00TvsJZXabvhfAhQ6jYonrQY4g~1z~iB0sIyuwiMmxQDvXhmU24ekWCErtMEPX~LLCPayLILAdYYKRkZIvhS~ew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              authority: false,
              postId: 0,
            },
          ],
        })
      );
    },
  ),
  데이터_없음: rest.get(
    apiUrls.comment.getCommentList(MOCK_POST_ID),
    (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json<ApiResponseData<GetCommentListResponse>>({
          result: "SUCCESS",
          data: [],
        }),
      );
    },
  ),
};
