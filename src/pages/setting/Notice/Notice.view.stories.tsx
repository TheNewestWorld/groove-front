import { Meta } from "@storybook/react";
import Badge from "./components/Badge";
import Notice, { Props } from "./Notice.view";

export default {
  title: "Pages/setting/Notice/views",
  component: Notice,
  args: {
    noticeList: [
      {
        title: "10월 16일 공지사항",
        description: "22.10.16",
        badge: <Badge type="NEW" />,
        onClick: () => alert("TODO"),
      },
      {
        title: "10월 11일 공지사항",
        description: "22.10.16",
        onClick: () => alert("TODO"),
      },
      {
        title: "카카오톡 관련 긴급 공지사항",
        description: "22.10.16",
        onClick: () => alert("TODO"),
      },
      {
        title: "9월 8일 공지사항",
        description: "22.10.16",
        onClick: () => alert("TODO"),
      },
    ],
  },
} as Meta;

const Template = (args: Props) => <Notice {...args} />;

export const 공지사항 = Template.bind({});
