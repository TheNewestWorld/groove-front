import { ComponentStory } from '@storybook/react';
import TrainerInfoItem from './TrainerInfoItem';

export default {
  title: 'Components/TrainerDetail/TrainerInfoItem',
  component: TrainerInfoItem,
  args: {
    title: "소개",
    content: "Quam et consequuntur modi eum. Ea minus dolorum velit ut ullam perspiciatis ut doloremque voluptate. Quo quisquam earum natus reiciendis magni nobis commodi. Aliquam repudiandae aut voluptatum. Eveniet laboriosam porro con"
  },
};

const Template: ComponentStory<typeof TrainerInfoItem> = (args) => <TrainerInfoItem {...args} />;

export const 글블록 = Template.bind({});
