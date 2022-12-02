import { Meta } from "@storybook/react";
import VocFormView, { Props } from "./VocForm.view";

export default {
  title: "Pages/setting/VocForm/views",
  component: VocFormView,
  args: {},
} as Meta;

const Template = (args: Props) => <VocFormView {...args} />;

export const 기본 = Template.bind({});
