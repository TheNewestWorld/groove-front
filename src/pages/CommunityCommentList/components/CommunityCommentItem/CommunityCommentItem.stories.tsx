import { Meta, Story } from "@storybook/react";
import CommunityCommentItem, { Props } from "./CommunityCommentItem.view";

export default {
  title: "components/community/CommunityCommentItem",
  component: CommunityCommentItem,
  args: {
    commenter: "나는용국",
    commenterImage:
      "https://s3-alpha-sig.figma.com/img/f2d3/d32f/9406a49f27586baa4f7afb580e682edd?Expires=1665360000&Signature=e6o7lwVEfcmqYdrmK6kEpwHNefeGVVX8a-o98W3wKZdqDBSs81~7~A9GjH4gaOePDsJMgHECT-T0vleYCDMflO2yyK0akgMAYcz3rvMkSTq1Pr2UYGOP33-q~gN2q74ht87lQ-sr6PNV41qd7DR6tJZg5OHobvzEQyM2LOlQsreBzRHXLITPsCnme4YsHqLponJ-spIcvv1Cgq5kSYzkx0rGdEA6T5QOtIQrtomlmPuuctM~KNcujZWsmlkbf8AWiRlZNi-dZPiuz9mlDCnmrNivm8402GRa1QbhqwMSE-X33-Y~NeSp1DtszH5V4jzqPLAA6sry03Jldzjv8TqMgw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    elpasedTime: "5분",
    comment:
      "최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까최대몇글자일까",
    onCommenterClick: () => alert("작성자 클릭"),
    onReplyClick: () => alert("답글 달기 클릭"),
    onOptionClick: () => alert("옵션 클릭")
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <CommunityCommentItem {...args} />
);

export const 기본 = Template.bind({});

export const 유저태그 = Template.bind({});
유저태그.args = {
  taggedUsers: [
    {
      userId: 0,
      nickname: "나는용국",
    },
    {
      userId: 1,
      nickname: "나는호인",
    },
  ],
};
