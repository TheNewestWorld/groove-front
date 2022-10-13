import { Meta, Story } from "@storybook/react";
import ResetPassword, { Props } from "./ResetPassword.view";

export default {
  title: "Pages/ResetPassword",
  component: ResetPassword,
  args: {},
} as Meta;

const Template: Story<Props> = (args: Props) => <ResetPassword {...args} />;

export const 기본 = Template.bind({});
