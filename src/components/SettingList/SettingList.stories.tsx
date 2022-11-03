import { Meta, Story } from "@storybook/react";

import SettingList, { Props } from "./SettingList";

export default {
  title: "components/page/SettingList",
  component: SettingList,
  args: {
    list: [
      { title: "공지사항", onClick: () => alert("공지사항 클릭") },
      { title: "문의하기", onClick: () => alert("문의하기 클릭") },
      { title: "회원탈퇴", onClick: () => alert("회원탈퇴 클릭") },
    ],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <SettingList {...args} />;

export const 기본 = Template.bind({});
