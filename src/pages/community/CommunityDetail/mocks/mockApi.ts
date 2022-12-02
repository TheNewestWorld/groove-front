import { rest } from "msw";
import { GetPostDetailResponse } from "../../../../common/apis/post/type";
import { apiUrls } from "../../../../common/apis/utils";
import { ApiResponseData } from "../../../../common/configs/axios";

export const 글_상세 = {
  데이터_있음_수정가능: rest.get(
    apiUrls.post.getPostDetail(0),
    (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json<ApiResponseData<GetPostDetailResponse>>({
          result: "SUCCESS",
          data: {
            id: 0,
            createdAt: "2022-12-02T19:33:08.602Z",
            title: "정승환처럼 노래부르려면 도대체 어떻게 해?",
            content:
              "기업은 기본적으로 영리(재산상의 이익)를 얻기 위하여 재화나 용역을 생산하고 판매하는 조직체이다. 이때 기업이 오랜 시간 존속하기 위해서는 유저 유입을 위한 전략을 모색하는 것도 중요하지만, 유입된 인원이 제품/서비스에 매력을 느끼고 지속해서 남아 있도록 하는 것 또한 매우 중요하다.\n후자가 중요한 이유는 간단하다. 첫 번째는 신규 유저를 확보하는 일은 꽤 큰 비용이 든다. 하버드 비즈니스 리뷰에 따르면, 신규 유저를 확보하는 일은 기존 고객을 유지하는 것보다 적게는 5배, 많게는 일은 기존 고객을 유지하는 것보다 적게는 5배, 많게는",
            userId: 0,
            nickname: "권진아",
            profileUri:
              "https://s3-alpha-sig.figma.com/img/7468/bebd/b1d4a2788c3153bea3ecad258bc2fbd9?Expires=1670803200&Signature=Fie9KU0Z8Ju4MbuKUBX8gJKgeKRuAMveH~qDSawxk~-NpEUstQEV06JgwEbhY5sJtfG9SAmgl7oZz6dg647lPnhEdTkShzSkwA6VnellveTFh9fOPR9W6JmzLYjH~CFqIZKawdzWEaRcbObRyByG7mvZdIop-nzZ89gJnzjNFiUjhZbGkuG-0SI57Dkzi1pTtRPoK-HeS8nXA95LNGzNy8sjuRBSauHCXhDXNqgHy7P-5adZpl2pQlilNDw2N~QUzNy6eBp5dhQ6QkKOXZnrp-Z446PAlPEFhhHFVuzUcFErzHZmQAe1zMUti9--oj6c-N7Jy0oIvEIdZEx0e8~vjw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            likeFlag: true,
            likeCount: 5,
            commentCount: 5,
            categoryId: 1,
            authority: true,
            attachmentUris: [
              {
                id: 0,
                type: "IMAGE",
                src: "https://s3-alpha-sig.figma.com/img/0d98/eac2/2cb8f1d0a6711440185938820a08bfec?Expires=1670803200&Signature=EHiBrCD4lw6-C2MgiDE40liOaiXjFDhHPouYJsfFdhQIAbjlAge9iXzdCAbCAMonQe1Z-JIxaPewixdRBDvldhJv19ai0qbqxbHBUpDaxe6QBWXphT3bcaJDo~luPOGBojTXnmXsVvopwmkgYAYvOWDZl~auLAbDmVuc40cMvlfcPrEi3NsWGHYrF3Ky9SCLzz7jG9nuKvj9fbkYhqHqED7YrV-tdmMZ8msVRSdb9PvIwD80z2ifhqIliyrigO~hjFbDn9YXF3v0Wb2eAGJc9H5z26BjV~QjWy33x8xOBDkX3I-Zado6WgcMg3tiVNA8W5LdFGjcaBaF3M~1hc~scA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                title: "",
              },
              {
                id: 1,
                type: "RECORD",
                src: "https://s3-alpha-sig.figma.com/img/0d98/eac2/2cb8f1d0a6711440185938820a08bfec?Expires=1670803200&Signature=EHiBrCD4lw6-C2MgiDE40liOaiXjFDhHPouYJsfFdhQIAbjlAge9iXzdCAbCAMonQe1Z-JIxaPewixdRBDvldhJv19ai0qbqxbHBUpDaxe6QBWXphT3bcaJDo~luPOGBojTXnmXsVvopwmkgYAYvOWDZl~auLAbDmVuc40cMvlfcPrEi3NsWGHYrF3Ky9SCLzz7jG9nuKvj9fbkYhqHqED7YrV-tdmMZ8msVRSdb9PvIwD80z2ifhqIliyrigO~hjFbDn9YXF3v0Wb2eAGJc9H5z26BjV~QjWy33x8xOBDkX3I-Zado6WgcMg3tiVNA8W5LdFGjcaBaF3M~1hc~scA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                title: "title1",
              },
              {
                id: 2,
                type: "IMAGE",
                src: "https://s3-alpha-sig.figma.com/img/fd6a/f053/5de098e895c6697f0aa8653ddb633936?Expires=1670803200&Signature=D6H98GeOu7GN74V2uo7pQu4D6vPYVA-bS~lkvl3YhgepjY1zdr9OXU0apUYuj8E~byvgmGNE2MGZ57qgwsFHOr5T2qb1ETX7LxocSeUt0N0dFpX2GrZLlgyXWQ8-AnzCIvM4p7ZaEmiBCPJfE723vEqsuQWm6LNXOkS~OD5eZv7xBlGa6lsaJkG55UBVUZXxMAANXkDEQjT~vpZbwQsQb7djT85bR1R4JeXqQBhiO5XCMaEL5cd7fnLUL0ocuyYqwpkRFc-JuQ1US3aOqnAwhOIWw2eo-wwXZKcYJYEwoBmxSHiHxSQ7pUee5RPaAYOTE2YlAt1XfvJqX07N7A5ekA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                title: "",
              },
              {
                id: 3,
                type: "IMAGE",
                src: "https://s3-alpha-sig.figma.com/img/7bd2/31ba/9d90b0536c3d4ee25e99fd5eefca4f7f?Expires=1670803200&Signature=a~9kUnpD67yGA8EjdfNCNfOTny5jQAkHgn7m8zNv0OmNYZNlPlEJli2cOQY~9ZxXSQviHo2rph7Q8oH9~rVdnkYa5RmHmIHs3AXFhRUxyZ5LVBgNl4to~MO~gCKHwOiS5MfQUTD0GgZeLodHWc3lvOQkgoP0OHbllfVOW9n8SruywOz8fF21nhRJgM0dell9n1PgQoT5N6OkHJJFqovwg3DcYtBIyvkAPjL5IoQd5JBx98KlaXrPF63IdQ2M3RlRNEIWFcnjjHGiyGEnnOOzOVd8gtbxHw1RQXvUZgr2YmC~nvmjRs9FLCxmImDr6Nq2cZRwsxRNBxC53t~E-axTKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                title: "",
              },
            ],
          },
        }),
      );
    },
  ),
  데이터_있음_수정불가능: rest.get(
    apiUrls.post.getPostDetail(0),
    (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json<ApiResponseData<GetPostDetailResponse>>({
          result: "SUCCESS",
          data: {
            id: 0,
            createdAt: "2022-12-02T19:33:08.602Z",
            title: "정승환처럼 노래부르려면 도대체 어떻게 해?",
            content:
              "기업은 기본적으로 영리(재산상의 이익)를 얻기 위하여 재화나 용역을 생산하고 판매하는 조직체이다. 이때 기업이 오랜 시간 존속하기 위해서는 유저 유입을 위한 전략을 모색하는 것도 중요하지만, 유입된 인원이 제품/서비스에 매력을 느끼고 지속해서 남아 있도록 하는 것 또한 매우 중요하다.\n후자가 중요한 이유는 간단하다. 첫 번째는 신규 유저를 확보하는 일은 꽤 큰 비용이 든다. 하버드 비즈니스 리뷰에 따르면, 신규 유저를 확보하는 일은 기존 고객을 유지하는 것보다 적게는 5배, 많게는 일은 기존 고객을 유지하는 것보다 적게는 5배, 많게는",
            userId: 0,
            nickname: "권진아",
            profileUri:
              "https://s3-alpha-sig.figma.com/img/7468/bebd/b1d4a2788c3153bea3ecad258bc2fbd9?Expires=1670803200&Signature=Fie9KU0Z8Ju4MbuKUBX8gJKgeKRuAMveH~qDSawxk~-NpEUstQEV06JgwEbhY5sJtfG9SAmgl7oZz6dg647lPnhEdTkShzSkwA6VnellveTFh9fOPR9W6JmzLYjH~CFqIZKawdzWEaRcbObRyByG7mvZdIop-nzZ89gJnzjNFiUjhZbGkuG-0SI57Dkzi1pTtRPoK-HeS8nXA95LNGzNy8sjuRBSauHCXhDXNqgHy7P-5adZpl2pQlilNDw2N~QUzNy6eBp5dhQ6QkKOXZnrp-Z446PAlPEFhhHFVuzUcFErzHZmQAe1zMUti9--oj6c-N7Jy0oIvEIdZEx0e8~vjw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            likeFlag: true,
            likeCount: 5,
            commentCount: 5,
            categoryId: 1,
            authority: false,
            attachmentUris: [
              {
                id: 0,
                type: "IMAGE",
                src: "https://s3-alpha-sig.figma.com/img/0d98/eac2/2cb8f1d0a6711440185938820a08bfec?Expires=1670803200&Signature=EHiBrCD4lw6-C2MgiDE40liOaiXjFDhHPouYJsfFdhQIAbjlAge9iXzdCAbCAMonQe1Z-JIxaPewixdRBDvldhJv19ai0qbqxbHBUpDaxe6QBWXphT3bcaJDo~luPOGBojTXnmXsVvopwmkgYAYvOWDZl~auLAbDmVuc40cMvlfcPrEi3NsWGHYrF3Ky9SCLzz7jG9nuKvj9fbkYhqHqED7YrV-tdmMZ8msVRSdb9PvIwD80z2ifhqIliyrigO~hjFbDn9YXF3v0Wb2eAGJc9H5z26BjV~QjWy33x8xOBDkX3I-Zado6WgcMg3tiVNA8W5LdFGjcaBaF3M~1hc~scA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                title: "title1",
              },
            ],
          },
        }),
      );
    },
  ),
};
