import { Meta, Story } from "@storybook/react";
import MyPage from "./MyPage";

export default {
  title: "Pages/user/MyPage/logic",
  component: MyPage,
  args: {
  },
} as Meta;

const Template: Story = () => <MyPage/>;

export const 기본 = Template.bind({});
