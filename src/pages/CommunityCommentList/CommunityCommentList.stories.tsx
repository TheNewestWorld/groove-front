import { Meta, Story } from "@storybook/react";
import CommunityCommentList, { Props } from "./CommunityCommentList.view";

export default {
  title: "Pages/CommunityCommentList",
  component: CommunityCommentList,
  args: {
    comments: [
      {
        comment: {
          commentId: 1,
          writer: "나는용국",
          profileImage:
            "https://s3-alpha-sig.figma.com/img/f2d3/d32f/9406a49f27586baa4f7afb580e682edd?Expires=1665360000&Signature=e6o7lwVEfcmqYdrmK6kEpwHNefeGVVX8a-o98W3wKZdqDBSs81~7~A9GjH4gaOePDsJMgHECT-T0vleYCDMflO2yyK0akgMAYcz3rvMkSTq1Pr2UYGOP33-q~gN2q74ht87lQ-sr6PNV41qd7DR6tJZg5OHobvzEQyM2LOlQsreBzRHXLITPsCnme4YsHqLponJ-spIcvv1Cgq5kSYzkx0rGdEA6T5QOtIQrtomlmPuuctM~KNcujZWsmlkbf8AWiRlZNi-dZPiuz9mlDCnmrNivm8402GRa1QbhqwMSE-X33-Y~NeSp1DtszH5V4jzqPLAA6sry03Jldzjv8TqMgw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          createdTime: new Date(),
          comment:
            "최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까",
          onReplyClick: () => alert("답글 달기 클릭"),
        },
        replies: [
          {
            commentId: 2,
            writer: "나는호인",
            profileImage:
              "https://s3-alpha-sig.figma.com/img/0a6b/c426/8808b81b39d15c76218ee24da2bd07fc?Expires=1665964800&Signature=AAjxqtlVrfknlX3NY~Xx8MzZQaOyaTovkHh49IOloFBl0Fyg~sJ66dQ72yF6vcFE27fA0Lg5voh1a1c65sllwn8HYkOJw8Ey-diBfdlskmR8L-6vELQx58J14xDhfykB1WrqVvzASEA9iMMs5O-WnMzce8rHWfRxki6K8xUFVPzh4GVD6ArWAIMKWq3muSznzs7NtOXZ2rHKxPe8qciCDMnjlLz6tnDp0glr9OK6hGI9yWvD20-Z7MYHqOvcAKRoC8n7pN7xYSHs9k~-G7C6DmId0DM64k3JVmqWJuavzXBezQIthMP56ysGrn0BMymmdB2iLZs9Ed2dfMQpMlzXMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            createdTime: new Date(),
            comment: "댓글 더보기 댓글더 보기 댓글더보기댓글 댓글댓글",
            taggedUsers: [
              {
                userId: 0,
                nickname: "나는용국",
              },
            ],
            isReply: true,
          },
          {
            commentId: 3,
            writer: "나는잉군",
            profileImage:
              "https://s3-alpha-sig.figma.com/img/3d25/4383/9637ff5427bc2594ee705db76fa17060?Expires=1665964800&Signature=LqMOCDndghSqbFuR2RBRM90nuEXwPhrJbteFug8sfyKU3obDSvj-0deoLsmkJ~bpVZdOXOnB3ZIDpg8zerirsVcDWDhVlry0lIsWA7~5gyxdFMfLCCA8JlOX5Ex9cdbGPbM9YLIDYC1FudNX81Zn2V44AdGYdaoBBXVQ1v8MmiBy4FSny56oJr6EHqAofrNK9GewIYtLAuS4pDI2XQTWcei0hGjxIf61O5UqyBTgWFo7qpbgkEPskGnCOpCUQXXpJ7BYtME9JyhvuDacXm-UCE4INxO31oKZhMpoj93vIYCK0FCj2EVe2mgVZBdL8V2aEnAYnfYOvg2ev0~7px70Uw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            createdTime: new Date(),
            comment: "댓글 더보기 댓글더 보기 댓글더보기댓글 댓글댓글",
            taggedUsers: [
              {
                userId: 1,
                nickname: "나는호인",
              },
            ],
          },
        ],
      },
      {
        comment: {
          commentId: 4,
          writer: "Maximillia",
          profileImage:
            "https://s3-alpha-sig.figma.com/img/220e/dcc0/542845da8a98cdd0cc866f4530727966?Expires=1665964800&Signature=CRBR8WMzD1jU6w~mcveuFC5ezwdXqcBWtRZNjZJfYKBIt9CbYInbigRbBbuHIgv-JHRe8Dyhkz2WjpRxUuK-6wkihhr4CK~2gr2g11nCuGoBvID93WG1yqQrwPHYfTspp0kSDl8um59Jdl6ralX0mgZ42SFyoNdT3ApGqnpGIOOMGHjwBVO539jjFTj5sVbBIDKqQ7eetBhAG1NmW54w5Qj2M4NA2tMlQu4fRnPbE6es1uNG47pXCOczq2NMBF5Lkh5mx~2-tfX0UxS3DSEms4toxoJd-mcFf-KtFPhas4TgXssl7bJrsxSqDa-qbE22As7oY8eljic1odoVjWFYcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          createdTime: new Date(),
          comment:
            "댓글 더보기 댓글더 보기  댓글더보기댓글 더보기댓글더보기댓글더보기댓글더보기댓글 더보",
          reComments: [],
        },
        replies: [
          {
            commentId: 5,
            writer: "나는호인",
            profileImage:
              "https://s3-alpha-sig.figma.com/img/0a6b/c426/8808b81b39d15c76218ee24da2bd07fc?Expires=1665964800&Signature=AAjxqtlVrfknlX3NY~Xx8MzZQaOyaTovkHh49IOloFBl0Fyg~sJ66dQ72yF6vcFE27fA0Lg5voh1a1c65sllwn8HYkOJw8Ey-diBfdlskmR8L-6vELQx58J14xDhfykB1WrqVvzASEA9iMMs5O-WnMzce8rHWfRxki6K8xUFVPzh4GVD6ArWAIMKWq3muSznzs7NtOXZ2rHKxPe8qciCDMnjlLz6tnDp0glr9OK6hGI9yWvD20-Z7MYHqOvcAKRoC8n7pN7xYSHs9k~-G7C6DmId0DM64k3JVmqWJuavzXBezQIthMP56ysGrn0BMymmdB2iLZs9Ed2dfMQpMlzXMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            createdTime: new Date(),
            comment: "댓글 더보기 댓글더 보기 댓글더보기댓글 댓글댓글",
            taggedUsers: [
              {
                userId: 0,
                nickname: "나는용국",
              },
            ],
          },
          {
            commentId: 6,
            writer: "나는잉군",
            profileImage:
              "https://s3-alpha-sig.figma.com/img/3d25/4383/9637ff5427bc2594ee705db76fa17060?Expires=1665964800&Signature=LqMOCDndghSqbFuR2RBRM90nuEXwPhrJbteFug8sfyKU3obDSvj-0deoLsmkJ~bpVZdOXOnB3ZIDpg8zerirsVcDWDhVlry0lIsWA7~5gyxdFMfLCCA8JlOX5Ex9cdbGPbM9YLIDYC1FudNX81Zn2V44AdGYdaoBBXVQ1v8MmiBy4FSny56oJr6EHqAofrNK9GewIYtLAuS4pDI2XQTWcei0hGjxIf61O5UqyBTgWFo7qpbgkEPskGnCOpCUQXXpJ7BYtME9JyhvuDacXm-UCE4INxO31oKZhMpoj93vIYCK0FCj2EVe2mgVZBdL8V2aEnAYnfYOvg2ev0~7px70Uw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            createdTime: new Date(),
            comment: "댓글 더보기 댓글더 보기 댓글더보기댓글 댓글댓글",
            taggedUsers: [
              {
                userId: 1,
                nickname: "나는호인",
              },
            ],
          },
        ],
      },
      {
        comment: {
          commentId: 7,
          writer: "Maximillia",
          profileImage:
            "https://s3-alpha-sig.figma.com/img/220e/dcc0/542845da8a98cdd0cc866f4530727966?Expires=1665964800&Signature=CRBR8WMzD1jU6w~mcveuFC5ezwdXqcBWtRZNjZJfYKBIt9CbYInbigRbBbuHIgv-JHRe8Dyhkz2WjpRxUuK-6wkihhr4CK~2gr2g11nCuGoBvID93WG1yqQrwPHYfTspp0kSDl8um59Jdl6ralX0mgZ42SFyoNdT3ApGqnpGIOOMGHjwBVO539jjFTj5sVbBIDKqQ7eetBhAG1NmW54w5Qj2M4NA2tMlQu4fRnPbE6es1uNG47pXCOczq2NMBF5Lkh5mx~2-tfX0UxS3DSEms4toxoJd-mcFf-KtFPhas4TgXssl7bJrsxSqDa-qbE22As7oY8eljic1odoVjWFYcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          createdTime: new Date(),
          comment:
            "댓글 더보기 댓글더 보기  댓글더보기댓글 더보기댓글더보기댓글더보기댓글더보기댓글 더보",
          reComments: [],
        },
      },
      {
        comment: {
          commentId: 8,
          writer: "Maximillia",
          profileImage:
            "https://s3-alpha-sig.figma.com/img/220e/dcc0/542845da8a98cdd0cc866f4530727966?Expires=1665964800&Signature=CRBR8WMzD1jU6w~mcveuFC5ezwdXqcBWtRZNjZJfYKBIt9CbYInbigRbBbuHIgv-JHRe8Dyhkz2WjpRxUuK-6wkihhr4CK~2gr2g11nCuGoBvID93WG1yqQrwPHYfTspp0kSDl8um59Jdl6ralX0mgZ42SFyoNdT3ApGqnpGIOOMGHjwBVO539jjFTj5sVbBIDKqQ7eetBhAG1NmW54w5Qj2M4NA2tMlQu4fRnPbE6es1uNG47pXCOczq2NMBF5Lkh5mx~2-tfX0UxS3DSEms4toxoJd-mcFf-KtFPhas4TgXssl7bJrsxSqDa-qbE22As7oY8eljic1odoVjWFYcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          createdTime: new Date(),
          comment:
            "댓글 더보기 댓글더 보기  댓글더보기댓글 더보기댓글더보기댓글더보기댓글더보기댓글 더보",
          reComments: [],
        },
      },
    ],
    onClickClose: () => alert("닫기"),
    onClickCreateComment: (comment: string) => alert(`${comment}`),
    onClickReport: (commentId: number) => alert(`${commentId} 신고하기 처리`),
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <CommunityCommentList {...args} />
);

export const 기본 = Template.bind({});
