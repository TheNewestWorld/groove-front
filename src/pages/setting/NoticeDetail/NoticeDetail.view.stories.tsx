import { Meta, Story } from "@storybook/react";
import NoticeDetail, { Props } from "./NoticeDetail.view";

export default {
  title: "Pages/setting/NoticeDetail/views",
  component: NoticeDetail,
  args: {
    title: "10월 16일 공지사항",
    profileImage:
      "https://s3-alpha-sig.figma.com/img/e452/a42a/0e2f210714943a1e1729fb33001b0697?Expires=1668384000&Signature=LyNgYLLos0LuqCkkDA5HBDGaHtqi8Vp0Aek-S75NY0a7ih6OgIPXtSehCxVcNOtQdQkHk4F~Cskxn2MljwNiuoODEGnqiTv6s4XbhP9eRetqIGcFFNMuHGZcfSIdmzwzooZac7RAdJRAUvcnrnCob0njkMWuUU1ksd3WGyAA7sIU6Msi9WQ3w91t~hXC7qDWX6DUtN9-Lj0DU29ge1-S4ExWL2rCcVm9cZcg5pTezm2Ja6aDKn7xrt-b1O95E7By3mY0zXe~uqrc4wF-~lfBhH8bLwBJkEnCa613MzX32Aegv8VZwJYuSrmB0LWUBCbAuTmdu3bYNqVv8EYjWicorA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    nickname: "GROOVE",
    date: new Date(),
    content:
      "안녕하세요, 그루브팀입니다.\n저희 서비스를 이용해 주셔서 항상 감사드립니다.",
    onClose: () => alert("뒤로 가기")
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <NoticeDetail {...args} />;

export const 기본 = Template.bind({});
