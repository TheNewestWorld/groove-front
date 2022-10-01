import { Meta } from "@storybook/react";
import Entry, { Props } from "./Entry.view";

export default {
  title: "Pages/Entry",
  component: Entry,
  args: {
    goToSignUp: () => alert("회원가입 페이지 이동"),
    goToSignIn: () => alert("로그인 페이지 이동"),
  },
} as Meta;

const Template = (args: Props) => <Entry {...args} />;

export const 첫화면 = Template.bind({});
