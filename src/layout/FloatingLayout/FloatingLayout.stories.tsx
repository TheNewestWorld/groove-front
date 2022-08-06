import { Meta } from "@storybook/react";
import FloatingLayout, { Props } from "./FloatingLayout";

export default {
  title: "layouts/FloatingLayout",
  component: FloatingLayout,
  args: {
    children: (
      <>
        <button>버튼</button>
        <button>버튼</button>
      </>
    ),
  },
} as Meta;

const Template = (args: Props) => <FloatingLayout {...args} />;

export const 기본 = Template.bind({});
