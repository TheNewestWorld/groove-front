import { Meta } from "@storybook/react";

import CircleImage, { Props } from "./CircleImage";

export default {
  title: 'components/community/image/CircleImage',
  component: CircleImage,
  args: {
    src: "https://s3-alpha-sig.figma.com/img/5e14/3deb/c803ac454e32bb3f2b425611dac9fc64?Expires=1659916800&Signature=gfCUqu73T48QepNBDRH8HeEh628pSanf9TTAjz-JSSwTWju6fyLw43lGh0DL01HxZDc4gNRaHz-0EYl-BjHRyhIX3D6DJnNlBOBNo3~N-nn9n3Azq-PkbkXWoDmpBJdllRB~jzOQI9dR~flSor2jbbmqvYAFxnXodPKBw36y0qEa~93pa37H18oeWn5Ikz5UNKKJpgPle-oBLxt63g0AYoJiiurouW5tLqrZWhp1YCwWpu9MjrQwoD6eFs2wgzcnJYcKUR12xVdDqa~hsj9yoO3D5U7aGQ8srbSIj6MaD83W~vt6QC-YhjfO2o-cJBz7RJm64xfJsXqe4Tfr7wqIZQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    onClick: () => alert("이미지 클릭"),
  },
} as Meta;

const Template = (args : Props) => <CircleImage {...args} />;

export const Default = Template.bind({});
