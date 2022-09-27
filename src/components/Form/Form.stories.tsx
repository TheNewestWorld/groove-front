import { Meta, Story } from "@storybook/react";

import Form, { Props } from "./Form.view";

export default {
  title: "components/form/Form",
  component: Form,
  args: {
    title: `첫번째줄\n두번째줄`,
    subTitle: `첫번째줄\n두번째줄`,
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <Form {...args} />;

export const 기본 = Template.bind({});

export const 타이틀만 = Template.bind({});
타이틀만.args = {
  subTitle: undefined,
};

export const 서브_타이틀만 = Template.bind({});
서브_타이틀만.args = {
  title: undefined,
};

export const 가운데_정렬 = Template.bind({});
가운데_정렬.args = {
  align: "center",
};

export const 오른쪽_정렬 = Template.bind({});
오른쪽_정렬.args = {
  align: "right",
};

export const 버튼_있음 = Template.bind({});
버튼_있음.args = {
  buttonText: "확인",
  onClick: () => alert("확인"),
};
