import { Meta } from "@storybook/react";
import SignUp, { Props } from "./SignUp.view";

export default {
  title: "Pages/SignUp",
  component: SignUp,
  args: {},
} as Meta;

const Template = (args: Props) => <SignUp {...args} />;

export const 회원가입 = Template.bind({});
