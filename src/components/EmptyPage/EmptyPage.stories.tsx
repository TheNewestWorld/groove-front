import { Meta, Story } from "@storybook/react";

import EmptyPage, { Props } from "./EmptyPage";

export default {
  title: "components/page/EmptyPage",
  component: EmptyPage,
  args: {
    title: "작성된 댓글이 없어요.",
    description: "처음으로 댓글을 달아주시겠어요?",
  },
} as Meta;

const Template: Story<Props> = (args : Props) => <EmptyPage {...args} />;

export const 제목내용 = Template.bind({});

export const 제목만 = Template.bind({});
제목만.args = {
  description: undefined
}

export const 내용만 = Template.bind({});
내용만.args = {
  title: undefined
}