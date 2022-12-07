import { Meta } from "@storybook/react";
import QnAFormView, { Props } from "./QnAForm.view";

export default {
  title: "Pages/setting/QnAForm/views",
  component: QnAFormView,
  args: {
    goToBack: () => alert("뒤로 가기")
  },
} as Meta;

const Template = (args: Props) => <QnAFormView {...args} />;

export const 기본 = Template.bind({});
