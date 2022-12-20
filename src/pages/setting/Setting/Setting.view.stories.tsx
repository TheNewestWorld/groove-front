import { Meta } from "@storybook/react";
import SettingListForm, { Props } from "../../../components/SettingListForm";

export default {
  title: "Pages/setting/Setting/views",
  component: SettingListForm,
  args: {
    headerTitle: "설정",
    settingList: [
      { title: "공지사항", onClick: () => alert("공지사항 이동") },
      { title: "문의하기", onClick: () => alert("문의하기 이동") },
      { title: "VOC", onClick: () => alert("VOC 이동") },
      { title: "로그아웃", onClick: () => alert("로그아웃 이동") },
      { title: "회원탈퇴", onClick: () => alert("회원탈퇴 이동") },
    ],
    onClickBack: () => alert("뒤로가기"),
  },
} as Meta;

const Template = (args: Props) => <SettingListForm {...args} />;

export const 설정 = Template.bind({});
