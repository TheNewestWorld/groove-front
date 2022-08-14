import { Meta } from "@storybook/react";
import TrainingItem, { Props } from "./TrainingItem";

export default {
  title: "components/TrainingItem",
  component: TrainingItem,
  args: {
    imageUrl: "",
    nickname: "음치몸치박치",
    date: new Date(),
    content: "코칭 부탁드립니다.",
    status: "ready",
  },
} as Meta;

const Template = (args: Props) => <TrainingItem {...args} />;

export const 기본 = Template.bind({});
