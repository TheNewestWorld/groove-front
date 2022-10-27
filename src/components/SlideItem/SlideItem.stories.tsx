import { Meta, Story } from "@storybook/react";
import SlideItem, { Props } from "./SlideItem";

export default {
  title: "components/common/SlideItem",
  component: SlideItem,
  args: {
    children: <div>테스트입니다.</div>,
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <SlideItem {...args} />;

export const 삭제 = Template.bind({});
삭제.args = {
  hasDelete: true,
  onClickDelete: () => alert("삭제"),
};

export const 수정 = Template.bind({});
수정.args = {
  hasEdit: true,
  onClickEdit: () => alert("수정"),
};

export const 삭제_수정 = Template.bind({});
삭제_수정.args = {
  hasDelete: true,
  onClickDelete: () => alert("삭제"),
  hasEdit: true,
  onClickEdit: () => alert("수정"),
};
