import { Meta } from "@storybook/react";
import QnAFormView, { Props, QnAForm } from "./QnAForm.view";
import { postQnA } from "../../../common/apis/qna/postQnA";

export default {
  title: "Pages/setting/QnANew/views",
  component: QnAFormView,
  args: {
    goToBack: () => alert("뒤로 가기"),
    onSubmit: (form: QnAForm) => {
      postQnA(form)
        .then(() => {
          console.log(form.title + " / " + form.content + " / " + form.image)
        })
        .catch((error) => {
          alert(error.message);
        })
    },
    imageList: [],
  },
} as Meta;

const Template = (args: Props) => <QnAFormView {...args} />;

export const 기본 = Template.bind({});
