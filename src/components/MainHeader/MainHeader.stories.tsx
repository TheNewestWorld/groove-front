import { Meta, Story } from "@storybook/react";
import MainHeader, { Props } from "./MainHeader";

export default {
  title: "components/MainHeader",
  component: MainHeader,
  args: {
    onTitleClick: () => alert("title 클릭"),
    onSearchClick: () => alert("search 클릭"),
    onAlarmClick: () => alert("alarm 클릭"),
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <MainHeader {...args} />;

export const 홈 = Template.bind({});

export const 커뮤니티 = Template.bind({});
커뮤니티.args = {
  title: "커뮤니티",
};

export const 홈_알림있음 = Template.bind({});
홈_알림있음.args = {
  hasNotification: true,
};

export const 트레이닝_알림있음 = Template.bind({});
트레이닝_알림있음.args = {
  title: "트레이닝",
  hasNotification: true,
};
