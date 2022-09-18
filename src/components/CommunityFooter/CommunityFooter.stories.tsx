import { Meta } from "@storybook/react";
import CommunityFooter, { Props } from "./CommunityFooter";

export default {
  title: "components/community/CommunityFooter",
  component: CommunityFooter,
  args: {
    likeCount: 1245,
    commentCount: 234,
    liked: true
  },
} as Meta;

const Template = (args: Props) => <CommunityFooter {...args} />;

export const 기본 = Template.bind({});