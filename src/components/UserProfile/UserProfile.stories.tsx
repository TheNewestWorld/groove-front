import { Meta, Story } from "@storybook/react";
import UserProfile, { Props } from "./UserProfile";
import EmptyProfile from "../../assets/icon/empty_profile.svg";

export default {
  title: "components/image/UserProfile",
  component: UserProfile,
  args: {
    defaultImage: EmptyProfile,
    src: "https://s3-alpha-sig.figma.com/img/a122/618d/0dcacf838ceb7db82b65e014363c7547?Expires=1668384000&Signature=Fo3raPkDLxHFwYcEG0WZWdx1Gj2uWmfogL3jXnz8xMiVNtJCB8xnzF-r1AX0pGur1d9-vNMi-iSPVXvkolGhwRl-IyAi6YtBOn0GEXopLjEgyyGvBBwFagEnBBluVmTf0LpAdB3gTycevOPVFq9prM2AXWfYjzgcGm1X56exOjYWqyJJhVuUM1YuzFeV-nDJ0zN1olp0ZOUmdnw3P9HUX2wHB3sSVJpRA4lSMnAxMG3S68gyk6R0g-Es6b3kecCKAZRgZ4tqxZAqrN~iUeXZZd3usL~CBZghNIOgH9QY5vhBWtNj-4mymWHWpUf8pomIX9-IwfFGa63fG-wII7QRoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    onClick: () => alert("프로필 클릭"),
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <UserProfile {...args} />;

export const 이미지_있음 = Template.bind({});

export const 이미지_없음 = Template.bind({});
이미지_없음.args = {
  src: undefined,
};
