import { Meta } from "@storybook/react";
import SettingListForm, { Props } from "../../../components/SettingListForm";

export default {
  title: "Pages/setting/Setting/views",
  component: SettingListForm,
  args: {
    headerTitle: "설정",
    settingList: [
      { title: "공지사항", onClick: () => alert("TODO") },
      { title: "문의하기", onClick: () => alert("TODO") },
      { title: "VOC", onClick: () => alert("TODO") },
      { title: "로그아웃", onClick: () => alert("TODO") },
      { title: "회원탈퇴", onClick: () => alert("TODO") },
    ],
    onClickBack: () => alert("뒤로가기"),
  },
} as Meta;

const Template = (args: Props) => <SettingListForm {...args} />;

export const 설정 = Template.bind({});
