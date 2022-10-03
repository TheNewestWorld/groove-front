import { Meta, Story } from "@storybook/react";

import RoundBox, { Props } from "./RoundBox";

export default {
  title: "components/common/RoundBox",
  component: RoundBox,
  args: {
    children: (
      <>
        <div>등록된 트레이너가 없습니다.</div>
      </>
    ),
  },
} as Meta;

const Template: Story<Props> = (args : Props) => <RoundBox {...args} />;

export const 그림자_없는 = Template.bind({});

export const 그림자_있는 = Template.bind({});
그림자_있는.args = {
  hasShadow: true
};
