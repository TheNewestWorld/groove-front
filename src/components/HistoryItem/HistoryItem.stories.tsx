import { Meta } from "@storybook/react";
import HistoryItem, { Props } from "./HistoryItem";

export default {
  title: "components/HistoryItem",
  component: HistoryItem,
  args: {
    imageUrl: "",
    nickname: "음치몸치박치",
    date: new Date(),
    content: "코칭 부탁드립니다.",
    status: "ready",
  },
} as Meta;

const Template = (args: Props) => <HistoryItem {...args} />;

export const 기본 = Template.bind({});
