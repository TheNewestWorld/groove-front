import { Meta } from "@storybook/react";
import Navigation, { props } from "./Navigation";

export default {
  title: "components/Navigation",
  component: Navigation,
  args: {
    current: "HOME",
  },
} as Meta;

const Template = (args: props) => <Navigation {...args} />;

export const 기본 = Template.bind({});
