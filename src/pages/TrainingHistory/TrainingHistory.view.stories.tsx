import { Meta } from "@storybook/react";
import TrainingHistoryView, { Props } from "./TrainingHistory.view";

export default {
  title: "Pages/TrainingHistory/views",
  component: TrainingHistoryView,
  args: {
    activeFilter: "최신순",
    filterList: ["최신순"],
    onChangeFilter: (filter: string) => alert(filter),
    trainingList: [
      {
        imageUrl: "",
        nickname: "음치몸치박치",
        date: new Date(),
        content: "코칭 부탁드립니다.",
        status: "ready",
      },
      {
        imageUrl: "",
        nickname: "음치몸치박치",
        date: new Date(),
        content: "코칭 부탁드립니다.",
        status: "done",
      },
      {
        imageUrl: "",
        nickname: "음치몸치박치",
        date: new Date(),
        content: "코칭 부탁드립니다.",
        status: "ready",
      },
      {
        imageUrl: "",
        nickname: "음치몸치박치",
        date: new Date(),
        content: "코칭 부탁드립니다.",
        status: "done",
      },
      {
        imageUrl: "",
        nickname: "음치몸치박치",
        date: new Date(),
        content: "코칭 부탁드립니다.",
        status: "done",
      },
    ],
  },
} as Meta;

const Template = (args: Props) => <TrainingHistoryView {...args} />;

export const 기본 = Template.bind({});
