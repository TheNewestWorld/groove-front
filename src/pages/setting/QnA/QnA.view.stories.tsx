import { Meta } from "@storybook/react";
import Badge from "./components/Badge";
import QnA, { Props } from "./QnA.view";

export default {
  title: "Pages/setting/QnA/views",
  component: QnA,
  args: {
    qnaList: [
      {
        title: "비밀번호 변경문의",
        content: "비밀번호 변경 문의 합니다.",
        description: "3일 전",
        onClick: () => alert("TODO"),
      },
      {
        title: "비밀번호 변경문의",
        content: "비밀번호 변경 문의 합니다.",
        description: "3일 전",
        badge: <Badge type="COMPLETE" />,
        onClick: () => alert("TODO"),
      },
      {
        title: "비밀번호 변경문의",
        content: "비밀번호 변경 문의 합니다.",
        description: "3일 전",
        badge: <Badge type="COMPLETE" />,
        onClick: () => alert("TODO"),
      },
      {
        title: "비밀번호 변경문의",
        content: "비밀번호 변경 문의 합니다.",
        description: "3일 전",
        badge: <Badge type="COMPLETE" />,
        onClick: () => alert("TODO"),
      },
    ],
  },
} as Meta;

const Template = (args: Props) => <QnA {...args} />;

export const 문의하기 = Template.bind({});
