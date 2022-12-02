import { rest } from "msw";
import { GetCategoryListResponse } from "../../../../common/apis/category";
import { GetPostListByCategoryResponse } from "../../../../common/apis/post";
import { apiUrls } from "../../../../common/apis/utils";
import { ApiResponseData } from "../../../../common/configs/axios";

export const 글_목록 = {
  데이터_있음: rest.get(apiUrls.post.getPostListByCategory(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetPostListByCategoryResponse>>({
        result: "SUCCESS",
        data: {
          page: 0,
          contents: [
            {
              id: 0,
              title: "정승환처럼 노래부르려면 도대체 어떻게 해?",
              content:
                "기업은 기본적으로 영리(재산상의 이익)를 얻기 위하여 재화나 용역을 생산하고 판매하는 조직체이다",
              userId: 0,
              nickname: "권진아",
              profileUri:
                "https://s3-alpha-sig.figma.com/img/4d5a/b364/fd94b16eebc2ad8a01916c327146c4ce?Expires=1670803200&Signature=cCBHrnZuGvXm9KnULpE4NFiU8tCiBKTW0312vJzkOFx55~hwZ5Ldm5f24tL9G7T-eOmU3T-ldep9mOpLKyXOkOpFQC1vc8Tvdg4-Of3cs91mpsY-lEWRkUfS2vvWmsYcYP7lSFBYkeFcV38bhZhwjzYE6Y8izlluU8rVhcbNxIX9s6EMeSo7fh2wJ8ETB8hVU--mbVrRT~ZQGle6CES9h57P7xuJZL~lAwXKpjTniZfefetjmfPWxSEkT43-~tgJOoA1s4dEWJyIlEfrvuJ07YgxDTXYRG6zY9kWGKdF7fgDUwZd15AxJewQhdt3Z6QpolVOk6g8peJkP-7bdGTuSw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              likeFlag: true,
              likeCount: 10,
              commentCount: 0,
              categoryId: 0,
              authority: true,
              attachmentUris: [
                "https://s3-alpha-sig.figma.com/img/0d98/eac2/2cb8f1d0a6711440185938820a08bfec?Expires=1670803200&Signature=EHiBrCD4lw6-C2MgiDE40liOaiXjFDhHPouYJsfFdhQIAbjlAge9iXzdCAbCAMonQe1Z-JIxaPewixdRBDvldhJv19ai0qbqxbHBUpDaxe6QBWXphT3bcaJDo~luPOGBojTXnmXsVvopwmkgYAYvOWDZl~auLAbDmVuc40cMvlfcPrEi3NsWGHYrF3Ky9SCLzz7jG9nuKvj9fbkYhqHqED7YrV-tdmMZ8msVRSdb9PvIwD80z2ifhqIliyrigO~hjFbDn9YXF3v0Wb2eAGJc9H5z26BjV~QjWy33x8xOBDkX3I-Zado6WgcMg3tiVNA8W5LdFGjcaBaF3M~1hc~scA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              ],
            },
            {
              id: 1,
              title: "보컬코칭 받아보신분 계신가요? 어땠는지⋯",
              content:
                "보컬코칭 받아보신분 계신가요? 어땠는지좀 알려주세요 제발요ㅠ궁금해서 미쳐버릴거 같으니까요",
              userId: 1,
              nickname: "Greenholt",
              profileUri:
                "https://s3-alpha-sig.figma.com/img/db25/4343/ba6eac1cac58dfe91757cdcc3afd572d?Expires=1670803200&Signature=MPzC9bOpugoO5X3aE-Wo6k1sSH5n8PywsCBRkUj5rf4beNCJE2FMBwNv67jS8855jUrP7vj-kbxtna04zusezAtp1C4RrSVGiQBe4SKmNn2OI6a3c1FRh2FZQE9b8zgTUo-W5fIw0CY4kNz3M4Q8sAsAT04Jtac1U~tHdmI0JB1aVSwSlXhwI0rBy6itvMPbvXg-d6CIwlw2W~HD15JXcesnfsm-ApEwCjwi9NGiGxDMGMfDEqY6qa3UA~9VmS0d~LVlEdAjAao1kPoOoGVEWh68OGR2et1YbSdRRww4GgUa5jIxnWYlR4jtxKqvgTwkZdynBxqaz1BYJJzoFp7zZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              likeFlag: true,
              likeCount: 30,
              commentCount: 0,
              categoryId: 0,
              authority: true,
              attachmentUris: [
                "https://s3-alpha-sig.figma.com/img/0d98/eac2/2cb8f1d0a6711440185938820a08bfec?Expires=1670803200&Signature=EHiBrCD4lw6-C2MgiDE40liOaiXjFDhHPouYJsfFdhQIAbjlAge9iXzdCAbCAMonQe1Z-JIxaPewixdRBDvldhJv19ai0qbqxbHBUpDaxe6QBWXphT3bcaJDo~luPOGBojTXnmXsVvopwmkgYAYvOWDZl~auLAbDmVuc40cMvlfcPrEi3NsWGHYrF3Ky9SCLzz7jG9nuKvj9fbkYhqHqED7YrV-tdmMZ8msVRSdb9PvIwD80z2ifhqIliyrigO~hjFbDn9YXF3v0Wb2eAGJc9H5z26BjV~QjWy33x8xOBDkX3I-Zado6WgcMg3tiVNA8W5LdFGjcaBaF3M~1hc~scA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              ],
            },
          ],
          hasNext: false,
        },
      }),
    );
  }),
  데이터_없음: rest.get(apiUrls.post.getPostListByCategory(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponseData<GetPostListByCategoryResponse>>({
        result: "SUCCESS",
        data: {
          page: 0,
          contents: [],
          hasNext: false,
        },
      }),
    );
  }),
};

export const 카테고리_목록 = {
  데이터_있음: rest.get(
    apiUrls.category.getCategoryList("COMMUNITY"),
    (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json<ApiResponseData<GetCategoryListResponse>>({
          result: "SUCCESS",
          data: [
            {
              id: 0,
              name: "전체 게시물",
            },
            {
              id: 1,
              name: "보컬 이야기",
            },
            {
              id: 2,
              name: "일상 이야기",
            },
            {
              id: 3,
              name: "기타",
            },
            {
              id: 4,
              name: "무언가",
            },
          ],
        }),
      );
    },
  ),
  데이터_없음: rest.get(
    apiUrls.category.getCategoryList("COMMUNITY"),
    (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json<ApiResponseData<GetCategoryListResponse>>({
          result: "SUCCESS",
          data: [],
        }),
      );
    },
  ),
};
