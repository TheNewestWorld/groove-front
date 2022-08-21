import { Meta } from "@storybook/react";

import BottomSheet, { Props } from "./BottomSheet.view";

export default {
  title: "components/CircleImage",
  component: BottomSheet,
  args: {
  },
} as Meta;

const Template = (args: Props) => <BottomSheet {...args} />;

export const Default = Template.bind({});
