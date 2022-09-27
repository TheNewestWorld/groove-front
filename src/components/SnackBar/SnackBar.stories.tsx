import { Meta, Story } from "@storybook/react";
import SnackBar, { Props } from "./SnackBar";
import { GreyDeleteCircle, YellowStartFillIcon } from "../../assets/icon";

export default {
  title: 'components/SnackBar',
  component: SnackBar,
  args: {
    content: "입력되지 않은 정보가 있어요.",
    hasShadow: true,
    icon: null,
    size: null,
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <SnackBar {...args} />;

export const 아이콘_없음 = Template.bind({});

export const 아이콘_1 = Template.bind({});
아이콘_1.args = {
  icon: <YellowStartFillIcon />,
}

export const 아이콘_2 = Template.bind({});
아이콘_2.args = {
  icon: <GreyDeleteCircle />,
}

export const 스낵바_롱 = Template.bind({});
스낵바_롱.args = {
  icon: <GreyDeleteCircle />,
  size: "long",
}

export const 스낵바_숏 = Template.bind({});
스낵바_숏.args = {
  size: "short",
  content: "최대 10자까지 작성할 수 있어요."
}