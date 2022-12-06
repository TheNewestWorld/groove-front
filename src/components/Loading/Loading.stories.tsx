import { Meta, Story } from "@storybook/react";

import Loading from "./Loading";

export default {
  title: "components/Loading",
  component: Loading,
} as Meta;

const Template: Story = () => <Loading />;

export const 기본 = Template.bind({});
