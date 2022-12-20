import { Meta, Story } from "@storybook/react";

import Error from "./Error";

export default {
  title: "components/Error",
  component: Error,
} as Meta;

const Template: Story = () => <Error />;

export const 기본 = Template.bind({});
