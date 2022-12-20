import { Meta } from "@storybook/react";
import Badge from "./components/Badge";
import SettingListForm, { Props } from "../../../components/SettingListForm";

export default {
  title: "Pages/setting/Notice/views",
  component: SettingListForm,
  args: {
    headerTitle: "공지사항",
    settingList: [
      {
        title: "10월 16일 공지사항",
        description: "22.10.16",
        badge: <Badge type="NEW" />,
        onClick: () => alert("OnClick Event"),
      },
      {
        title: "10월 11일 공지사항",
        description: "22.10.16",
        onClick: () => alert("OnClick Event"),
      },
      {
        title: "카카오톡 관련 긴급 공지사항",
        description: "22.10.16",
        onClick: () => alert("OnClick Event"),
      },
      {
        title: "9월 8일 공지사항",
        description: "22.10.16",
        onClick: () => alert("OnClick Event"),
      },
    ],
    onClickBack: () => alert("뒤로가기"),
  },
} as Meta;

const Template = (args: Props) => <SettingListForm {...args} />;

export const 공지사항 = Template.bind({});
