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

export const Main = Template.bind({});
Main.args = {};

export const NotMain = Template.bind({});
NotMain.args = {
  title: "커뮤니티",
};

export const Main_Notification = Template.bind({});
Main_Notification.args = {
  notificationCount: 5,
};

export const NotMain_Notification = Template.bind({});
NotMain_Notification.args = {
  title: "트레이닝",
  notificationCount: 50,
};
