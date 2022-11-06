import { Meta } from "@storybook/react";
import EditUserProfileView, { Props } from "./EditUserProfile.view";

export default {
  title: "Pages/user/EditUserProfile/views",
  component: EditUserProfileView,
  args: {
    src: "https://s3-alpha-sig.figma.com/img/a122/618d/0dcacf838ceb7db82b65e014363c7547?Expires=1668384000&Signature=Fo3raPkDLxHFwYcEG0WZWdx1Gj2uWmfogL3jXnz8xMiVNtJCB8xnzF-r1AX0pGur1d9-vNMi-iSPVXvkolGhwRl-IyAi6YtBOn0GEXopLjEgyyGvBBwFagEnBBluVmTf0LpAdB3gTycevOPVFq9prM2AXWfYjzgcGm1X56exOjYWqyJJhVuUM1YuzFeV-nDJ0zN1olp0ZOUmdnw3P9HUX2wHB3sSVJpRA4lSMnAxMG3S68gyk6R0g-Es6b3kecCKAZRgZ4tqxZAqrN~iUeXZZd3usL~CBZghNIOgH9QY5vhBWtNj-4mymWHWpUf8pomIX9-IwfFGa63fG-wII7QRoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    nickname: "나는용국",
    onClose: () => alert("이전 클릭"),
    onClickConfirm: (image: File | null, nickname: string) =>
      alert(`이미지: ${image} 닉네임: ${nickname}`),
  },
} as Meta;

const Template = (args: Props) => <EditUserProfileView {...args} />;

export const 기본 = Template.bind({});
