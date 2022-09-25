import { Meta, Story } from "@storybook/react";
import ContentBody, { Props } from "./ContentBody.view";

export default {
  title: "components/ContentBody",
  component: ContentBody,
  args: {
    content: "여기는 내용이다 내용이야.",
    imageList: [{
      src:
        "https://vrthumb.imagetoday.co.kr/2019/11/19/twi001t2920297.jpg",
      id: 0,
    }, {
      src:
        "https://vrthumb.imagetoday.co.kr/2019/11/19/twi001t2920297.jpg",
      id: 1,
    }, {
      src:
        "https://vrthumb.imagetoday.co.kr/2019/11/19/twi001t2920297.jpg",
      id: 2,
    }, {
      src:
        "https://vrthumb.imagetoday.co.kr/2019/11/19/twi001t2920297.jpg",
      id: 3,
    }, {
      src:
        "https://vrthumb.imagetoday.co.kr/2019/11/19/twi001t2920297.jpg",
      id: 4,
    }, {
      src:
        "https://vrthumb.imagetoday.co.kr/2019/11/19/twi001t2920297.jpg",
      id: 5,
    }
    ],
    audio: {
      title: "샘플입니다.",
      src: "",
      id: 0,
    }
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <ContentBody {...args} />;

export const 텍스트만 = Template.bind({});
텍스트만.args = {
  imageList: undefined,
  audio: undefined,
}

export const 오디오 = Template.bind({});
오디오.args = {
  imageList: undefined,
}

export const 이미지 = Template.bind({});
이미지.args = {
  audio: undefined,
}