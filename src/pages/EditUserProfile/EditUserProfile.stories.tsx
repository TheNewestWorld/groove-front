import { Meta } from "@storybook/react";
import EditUserProfileView, { Props } from "./EditUserProfile.view";

export default {
  title: "Pages/user/EditUserProfile/views",
  component: EditUserProfileView,
  args: {
    onClose: () => alert("이전 클릭")
  }
} as Meta;

const Template = (args: Props) => <EditUserProfileView {...args} />;

export const 기본 = Template.bind({});