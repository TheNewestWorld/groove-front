import { Meta } from "@storybook/react";
import Navigation, { Props } from "./Navigation";

export default {
  title: "components/common/Navigation",
  component: Navigation,
  args: {
    current: "HOME",
  },
} as Meta;

const Template = (args: Props) => <Navigation {...args} />;

export const 기본 = Template.bind({});
