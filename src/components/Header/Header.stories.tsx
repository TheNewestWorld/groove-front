import { Meta } from "@storybook/react";
import IconButton from "../IconButton";
import Header, { Props } from "./Header";

import { ArrowTailIcon, DotsIcon } from "../../assets/icon";

export default {
  title: "components/Header",
  component: Header,
  args: {
    title: "게시물",
    left: <IconButton icon={<ArrowTailIcon />} />,
    right: <IconButton icon={<DotsIcon />} />,
  },
} as Meta;

const Template = (args: Props) => <Header {...args} />;

export const 기본 = Template.bind({});
