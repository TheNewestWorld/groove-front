import { Meta } from "@storybook/react";
import QnANewView, { Props, QnAContents } from "./QnANew.view";
import { postQna } from "../../../common/apis/qna/postQna";

export default {
  title: "Pages/setting/QnANew/views",
  component: QnANewView,
  args: {
    goToBack: () => alert("뒤로 가기"),
    onSubmit: (form: QnAContents) => {
      postQna(form)
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

const Template = (args: Props) => <QnANewView {...args} />;

export const 기본 = Template.bind({});
