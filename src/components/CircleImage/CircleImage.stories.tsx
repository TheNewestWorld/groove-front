import { ComponentStory } from '@storybook/react';
import CircleImage from './CircleImage';

export default {
  title: 'Components/CircleImage',
  component: CircleImage,
  args: {
    src: "https://s3-alpha-sig.figma.com/img/5e14/3deb/c803ac454e32bb3f2b425611dac9fc64?Expires=1659916800&Signature=gfCUqu73T48QepNBDRH8HeEh628pSanf9TTAjz-JSSwTWju6fyLw43lGh0DL01HxZDc4gNRaHz-0EYl-BjHRyhIX3D6DJnNlBOBNo3~N-nn9n3Azq-PkbkXWoDmpBJdllRB~jzOQI9dR~flSor2jbbmqvYAFxnXodPKBw36y0qEa~93pa37H18oeWn5Ikz5UNKKJpgPle-oBLxt63g0AYoJiiurouW5tLqrZWhp1YCwWpu9MjrQwoD6eFs2wgzcnJYcKUR12xVdDqa~hsj9yoO3D5U7aGQ8srbSIj6MaD83W~vt6QC-YhjfO2o-cJBz7RJm64xfJsXqe4Tfr7wqIZQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    size: "small",
    fit: "fit-cover",
    onClick: () => alert(`이미지 클릭`),
  },
};

const Template: ComponentStory<typeof CircleImage> = (args) => <CircleImage {...args} />;

export const Small_Contain = Template.bind({});
Small_Contain.args = {
  size: "small",
  fit: "fit-contain"
}

export const Small_Cover = Template.bind({});
Small_Cover.args = {
  size: "small",
  fit: "fit-cover"
}

export const Small_Fill = Template.bind({});
Small_Fill.args = {
  size: "small",
  fit: "fit-fill"
}

export const Medium_Contain = Template.bind({});
Medium_Contain.args = {
  size: "medium",
  fit: "fit-contain"
}

export const Medium_Cover = Template.bind({});
Medium_Cover.args = {
  size: "medium",
  fit: "fit-cover"
}

export const Medium_Fill = Template.bind({});
Medium_Fill.args = {
  size: "medium",
  fit: "fit-fill"
}

export const Large_Contain = Template.bind({});
Large_Contain.args = {
  size: "large",
  fit: "fit-contain"
}

export const Large_Cover = Template.bind({});
Large_Cover.args = {
  size: "large",
  fit: "fit-cover"
}

export const Large_Fill = Template.bind({});
Large_Fill.args = {
  size: "large",
  fit: "fit-fill"
}
