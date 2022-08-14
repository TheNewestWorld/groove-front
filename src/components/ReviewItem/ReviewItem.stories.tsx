import { Meta } from "@storybook/react";
import ReviewItem, { Props } from "./ReviewItem";

export default {
  title: "components/ReviewItem",
  component: ReviewItem,
  args: {
    imageUrl: "",
    nickname: "음치몸치박치",
    date: new Date(),
    content: "코칭 잘해주시네요",
    score: 3,
  },
} as Meta;

const Template = (args: Props) => <ReviewItem {...args} />;

export const 기본 = Template.bind({});
