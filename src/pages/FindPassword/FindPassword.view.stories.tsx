import { Meta } from "@storybook/react";
import FindPassword, { Props } from "./FindPassword.view";

export default {
  title: "Pages/FindPassword",
  component: FindPassword,
  args: {},
} as Meta;

const Template = (args: Props) => <FindPassword {...args} />;

export const 비밀번호_찾기 = Template.bind({});
