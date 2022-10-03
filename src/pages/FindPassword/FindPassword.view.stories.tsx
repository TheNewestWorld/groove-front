import { Meta, Story } from "@storybook/react";
import FindPassword, { Props } from "./FindPassword.view";

export default {
  title: "Pages/FindPassword",
  component: FindPassword,
  args: { isSended: false },
} as Meta;

const Template: Story<Props> = (args: Props) => <FindPassword {...args} />;

export const 이메일_발송전 = Template.bind({});

export const 이메일_발송후 = Template.bind({});
이메일_발송후.args = { isSended: true };
