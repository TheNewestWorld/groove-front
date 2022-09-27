import { Meta, Story } from "@storybook/react";
import SnackBar, { Props } from "./SnackBar";
import { YellowStartFillIcon } from "../../assets/icon";

export default {
  title: 'components/SnackBar',
  component: SnackBar,
  args: {
    content: "입력되지 않은 정보가 있어요.",
    hasShadow: false,
    icon: undefined,
    size: "small",
    position: "bottom",
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <SnackBar {...args} />;

export const 아이콘_없음 = Template.bind({});

export const 아이콘_있음 = Template.bind({});
아이콘_있음.args = {
  icon: <YellowStartFillIcon />,
}

export const 스낵바_라지 = Template.bind({});
스낵바_라지.args = {
  size: "large",
}

export const 그림자_있음 = Template.bind({});
그림자_있음.args = {
  hasShadow: true,
}

export const 스낵바_미들 = Template.bind({});
스낵바_미들.args = {
  position: "middle",
}