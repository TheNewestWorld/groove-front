import { Meta } from "@storybook/react";
import Badge from "./components/Badge";
import SettingListForm, { Props } from "../../../components/SettingListForm";

export default {
  title: "Pages/setting/QnA/views",
  component: SettingListForm,
  args: {
    headerTitle: "문의하기",
    settingList: [
      {
        title: "비밀번호 변경문의",
        content: "비밀번호 변경 문의 합니다.",
        description: "3일 전",
        onClick: () => alert("TODO"),
      },
      {
        title: "비밀번호 변경문의",
        content: "비밀번호 변경 문의 합니다.",
        description: "3일 전",
        badge: <Badge type="COMPLETE" />,
        onClick: () => alert("TODO"),
      },
      {
        title: "비밀번호 변경문의",
        content: "비밀번호 변경 문의 합니다.",
        description: "3일 전",
        badge: <Badge type="COMPLETE" />,
        onClick: () => alert("TODO"),
      },
      {
        title: "비밀번호 변경문의",
        content: "비밀번호 변경 문의 합니다.",
        description: "3일 전",
        badge: <Badge type="COMPLETE" />,
        onClick: () => alert("TODO"),
      },
    ],
    onClickBack: () => alert("뒤로가기"),
  },
} as Meta;

const Template = (args: Props) => <SettingListForm {...args} />;

export const 문의하기 = Template.bind({});
