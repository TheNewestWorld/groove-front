import { Meta, Story } from "@storybook/react";
import QnADetail, { Props } from "./QnADetail.view";

export default {
  title: "Pages/setting/QnADetail/views",
  component: QnADetail,
  args: {
    qna_id: 9,
    user_id: 11,
    title: "비밀번호 변경문의",
    profileImage:
      "https://s3-alpha-sig.figma.com/img/a122/618d/0dcacf838ceb7db82b65e014363c7547?Expires=1668384000&Signature=Fo3raPkDLxHFwYcEG0WZWdx1Gj2uWmfogL3jXnz8xMiVNtJCB8xnzF-r1AX0pGur1d9-vNMi-iSPVXvkolGhwRl-IyAi6YtBOn0GEXopLjEgyyGvBBwFagEnBBluVmTf0LpAdB3gTycevOPVFq9prM2AXWfYjzgcGm1X56exOjYWqyJJhVuUM1YuzFeV-nDJ0zN1olp0ZOUmdnw3P9HUX2wHB3sSVJpRA4lSMnAxMG3S68gyk6R0g-Es6b3kecCKAZRgZ4tqxZAqrN~iUeXZZd3usL~CBZghNIOgH9QY5vhBWtNj-4mymWHWpUf8pomIX9-IwfFGa63fG-wII7QRoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    nickname: "나는용국",
    date: new Date(),
    content: "비밀번호가 기억이나지않습니다.",
    onClickProfile: (id: number) => alert(`${id}번 유저 페이지 이동`),
    onClose: () => alert("뒤로 가기"),
    onDelete: (id: number) => alert(`${id}번 삭제 요청`),
    onModify: (id: number) => alert(`${id}번 수정 페이지 라우팅`),
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <QnADetail {...args} />;

export const 기본 = Template.bind({});
