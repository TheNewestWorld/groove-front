import { Meta } from "@storybook/react";
import Dialog, { Props } from "./Dialog.view";

export default {
  title: "components/common/Dialog",
  component: Dialog,
  args: {
    title: "입력하신 정보가 맞습니까?",
    children: (
      <>
        <button>예</button>
        <button>아니요</button>
      </>
    ),
  },
} as Meta;

const Template = (args: Props) => <Dialog {...args} />;

export const 기본 = Template.bind({});
