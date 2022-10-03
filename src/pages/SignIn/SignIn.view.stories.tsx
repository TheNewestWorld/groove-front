import { Meta } from "@storybook/react";
import SignIn, { Props } from "./SignIn.view";

export default {
  title: "Pages/SignIn",
  component: SignIn,
  args: {},
} as Meta;

const Template = (args: Props) => <SignIn {...args} />;

export const 로그인 = Template.bind({});
