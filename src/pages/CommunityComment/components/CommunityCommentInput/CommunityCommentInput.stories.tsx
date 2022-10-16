import { Meta, Story } from "@storybook/react";
import CommunityCommentInput, { Props } from "./CommunityCommentInput.view";

export default {
  title: "components/community/CommunityCommentInput",
  component: CommunityCommentInput,
  args: {
    onSubmitComment: (comment: string) => alert(`${comment}`),
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <CommunityCommentInput {...args} />
);

export const 기본 = Template.bind({});
