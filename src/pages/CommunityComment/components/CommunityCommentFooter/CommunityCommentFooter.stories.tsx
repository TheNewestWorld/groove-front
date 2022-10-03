import { Meta, Story } from "@storybook/react";
import CommunityCommentFooter, { Props } from "./CommunityCommentFooter.view";

export default {
  title: "components/community/CommunityCommentFooter",
  component: CommunityCommentFooter,
  args: {
    onSubmitComment: (comment: string) => alert(`${comment}`),
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <CommunityCommentFooter {...args} />
);

export const 기본 = Template.bind({});
