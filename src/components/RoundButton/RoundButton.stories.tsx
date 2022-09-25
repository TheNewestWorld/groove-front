import { Meta, Story } from "@storybook/react";

import RoundButton, { Props } from "./RoundButton";

export default {
  title: "components/button/RoundButton",
  component: RoundButton,
  args: {
    children: "회원가입 완료",
    colorTheme: "primary",
    onClick: () => alert("버튼 클릭"),
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <RoundButton {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  colorTheme: "secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
