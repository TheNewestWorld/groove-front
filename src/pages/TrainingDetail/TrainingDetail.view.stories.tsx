import { Meta } from "@storybook/react";
import TrainingDetailView, { Props } from "./TrainingDetail.view";

export default {
  title: "Pages/TrainingDetail/views",
  component: TrainingDetailView,
  args: {},
} as Meta;

const Template = (args: Props) => <TrainingDetailView {...args} />;

export const 기본 = Template.bind({});
