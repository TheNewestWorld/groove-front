import { Meta, Story } from "@storybook/react";
import ImageList, { Props } from "./ImageList.view";

export default {
  title: "components/content/ImageList",
  component: ImageList,
  args: {
    imageList: [
      {
        src: "https://vrthumb.imagetoday.co.kr/2019/11/19/twi001t2920297.jpg",
        id: 0,
      },
      {
        src: "https://vrthumb.imagetoday.co.kr/2019/11/19/twi001t2920297.jpg",
        id: 1,
      },
      {
        src: "https://vrthumb.imagetoday.co.kr/2019/11/19/twi001t2920297.jpg",
        id: 2,
      },
      {
        src: "https://vrthumb.imagetoday.co.kr/2019/11/19/twi001t2920297.jpg",
        id: 3,
      },
      {
        src: "https://vrthumb.imagetoday.co.kr/2019/11/19/twi001t2920297.jpg",
        id: 4,
      },
      {
        src: "https://vrthumb.imagetoday.co.kr/2019/11/19/twi001t2920297.jpg",
        id: 5,
      },
    ],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <ImageList {...args} />;

export const 이미지_삭제_불가능 = Template.bind({});

export const 이미지_삭제_가능 = Template.bind({});
이미지_삭제_가능.args = {
  canDelete: true,
  onClickDelete: (id) => alert(id),
};
