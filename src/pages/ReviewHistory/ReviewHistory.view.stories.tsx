import { Meta } from "@storybook/react";
import ReviewHistoryView, { Props } from "./ReviewHistory.view";

export default {
  title: "Pages/ReviewHistory/views",
  component: ReviewHistoryView,
  args: {
    activeFilter: "최신순",
    filterList: ["최신순"],
    onChangeFilter: (filter: string) => alert(filter),
    reviewList: [
      {
        imageUrl: "",
        nickname: "음치몸치박치",
        date: new Date(),
        content: "정말 잘 가르치십니다.",
        score: 1,
      },
      {
        imageUrl: "",
        nickname: "음치몸치박치",
        date: new Date(),
        content: "정말 잘 가르치십니다.",
        score: 2,
      },
      {
        imageUrl: "",
        nickname: "음치몸치박치",
        date: new Date(),
        content: "정말 잘 가르치십니다.",
        score: 3,
      },
      {
        imageUrl: "",
        nickname: "음치몸치박치",
        date: new Date(),
        content: "정말 잘 가르치십니다.",
        score: 4,
      },
      {
        imageUrl: "",
        nickname: "음치몸치박치",
        date: new Date(),
        content: "정말 잘 가르치십니다.",
        score: 5,
      },
    ],
  },
} as Meta;

const Template = (args: Props) => <ReviewHistoryView {...args} />;

export const 기본 = Template.bind({});
