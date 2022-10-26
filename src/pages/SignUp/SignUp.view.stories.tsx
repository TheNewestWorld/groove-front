import { Meta, Story } from "@storybook/react";
import SignUp, { Props } from "./SignUp.view";

export default {
  title: "Pages/user/SignUp/views",
  component: SignUp,
  args: {
    isSubmitted: false,
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <SignUp {...args} />;

export const 회원가입_완료전 = Template.bind({});

export const 회원가입_완료후 = Template.bind({});
회원가입_완료후.args = {
  isSubmitted: true,
};
