import { Meta, Story } from "@storybook/react";
import CommunityFormView, { Props } from "./CommunityForm.view";

export default {
  title: "Pages/community/CommunityForm/views",
  component: CommunityFormView,
  args: {
    categoryList: ["보컬 이야기", "일상 이야기", "기타"]
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <CommunityFormView {...args} />;

export const 기본 = Template.bind({});
