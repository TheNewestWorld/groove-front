import { Meta, Story } from "@storybook/react";

import SettingList, { Props } from "./SettingList";

const list = [
  { title: "공지사항", onClick: () => alert("공지사항 클릭") },
  { title: "문의하기", onClick: () => alert("문의하기 클릭") },
  { title: "회원탈퇴", onClick: () => alert("회원탈퇴 클릭") },
];

export default {
  title: "components/page/SettingList",
  component: SettingList,
  args: {
    list: list,
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <SettingList {...args} />;

export const 타이틀 = Template.bind({});

export const 타이틀_설명 = Template.bind({});
타이틀_설명.args = {
  list: list.map((list) => {
    return { ...list, description: "22.10.16", badge: <>New</> };
  }),
};

export const 타이틀_서브타이틀_설명 = Template.bind({});
타이틀_서브타이틀_설명.args = {
  list: list.map((list) => {
    return {
      ...list,
      description: "22.10.16",
      badge: <>답변완료</>,
      content: "본문 내용이 보입니다.",
    };
  }),
};