import { Meta, Story } from "@storybook/react";
import TrainingDetailView, { Props } from "./TrainingDetail.view";

export default {
  title: "Pages/TrainingDetail/views",
  component: TrainingDetailView,
  args: {
    title: "정승환이 되고 싶습니다.",
    nickname: "승환정",
    profileImage: "",
    date: new Date(),
    content: "가나다라마바사아자차카타파하",
    role: "writer",
    status: "ready",
    feedback: {
      title: "정승환이 되고 싶으세요?",
      nickname: "트레이너",
      profileImage: "",
      date: new Date(),
      content: "가나다라마바사아자차카타파하",
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <TrainingDetailView {...args} />
);

export const 작성자_피드백_있음 = Template.bind({});
작성자_피드백_있음.args = {
  status: "in-progress",
};

export const 트레이너_피드백_있음 = Template.bind({});
트레이너_피드백_있음.args = {
  role: "trainer",
  status: "in-progress",
};

export const 기타_피드백_있음 = Template.bind({});
기타_피드백_있음.args = {
  role: "unknown",
};

export const 작성자_피드백_없음 = Template.bind({});
작성자_피드백_없음.args = {
  status: "ready",
  feedback: undefined,
};

export const 트레이너_피드백_없음 = Template.bind({});
트레이너_피드백_없음.args = {
  feedback: undefined,
  role: "trainer",
  status: "ready",
};

export const 기타_피드백_없음 = Template.bind({});
기타_피드백_없음.args = {
  feedback: undefined,
  role: "unknown",
};

export const 트레이너_코칭_완료 = Template.bind({});
트레이너_코칭_완료.args = {
  role: "trainer",
  status: "done",
};

export const 작성자_코칭_완료 = Template.bind({});
작성자_코칭_완료.args = {
  status: "done",
};
