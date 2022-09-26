import { Meta, Story } from "@storybook/react";
import Notification, { Props } from "./Notification";

import { AlarmIcon, SearchIcon } from "../../assets/icon";

export default {
  title: "components/Notification",
  component: Notification,
  args: {
    hasNotification: true,
    children: <SearchIcon/>,
    onClick: () => alert("클릭")
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <Notification {...args} />;

export const 검색아이콘_알림있음 = Template.bind({});

export const 검색아이콘_알림없음 = Template.bind({});
검색아이콘_알림없음.args = {
  hasNotification: false
}

export const 알림아이콘_알림있음 = Template.bind({});
알림아이콘_알림있음.args = {
  children: <AlarmIcon/>
}
