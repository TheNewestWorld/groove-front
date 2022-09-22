import { Meta, Story } from "@storybook/react";
import SnackBar, { Props } from "./SnackBar";

export default {
  title: 'components/SnackBar',
  component: SnackBar,
  args: {
    content: "입력되지 않은 정보가 있어요.",
    hasIcon: true,
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <SnackBar {...args} />;

export const 아이콘_있음 = Template.bind({});

export const 아이콘_없음 = Template.bind({});
아이콘_없음.args = {
  hasIcon: false
}
