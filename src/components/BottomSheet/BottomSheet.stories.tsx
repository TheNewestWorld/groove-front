import { Meta, Story } from "@storybook/react";

import BottomSheet, { Props } from "./BottomSheet.view";

export default {
  title: "components/BottomSheet",
  component: BottomSheet,
  args: {
    title: "헤더 타이틀",
    children: <>여기는 내용이다.</>,
    hasCloseButton: true,
    onClose: () => alert("닫기"),
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <BottomSheet {...args} />;

export const 닫기_있음 = Template.bind({});

export const 닫기_없음 = Template.bind({});
닫기_없음.args = {
  hasCloseButton: false,
};

export const 헤더_있음 = Template.bind({});

export const 헤더_없음 = Template.bind({});
헤더_없음.args = {
  title: "",
};
