import { Meta, Story } from "@storybook/react";
import CircleButton, { Props } from "./CircleButton";
import { YellowStartFillIcon } from "../../assets/icon";

export default {
  title: 'components/button/CircleButton',
  component: CircleButton,
  args: {
    icon: <YellowStartFillIcon />,
    colorTheme: "light",
    shadow: false,
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <CircleButton {...args} />;

export const primary = Template.bind({});
primary.args = {
  colorTheme: "primary",
}

export const secondary = Template.bind({});
secondary.args = {
  colorTheme: "secondary",
}

export const dark = Template.bind({});
dark.args = {
  colorTheme: "dark",
}

export const light = Template.bind({});
light.args = {
  colorTheme: "light",
}

export const 그림자_있음 = Template.bind({});
그림자_있음.args = {
  shadow: true,
}