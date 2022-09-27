import { Meta, Story } from "@storybook/react";

import Input, { Props } from "./Input.view";

export default {
  title: "components/Input",
  component: Input,
  args: {
    label: "항목 이름",
    value: "이렇게 작성하면 됩니다.",
    placeholder: "placeholder",
    onReset: () => {},
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <Input {...args} />;

export const 입력값_있음 = Template.bind({});

export const 입력값_없음 = Template.bind({});
입력값_없음.args = {
  value: "",
};

export const 통과 = Template.bind({});
통과.args = {
  confirmMessage: "통과",
};

export const 에러 = Template.bind({});
에러.args = {
  errorMessage: "에러 발생",
};
