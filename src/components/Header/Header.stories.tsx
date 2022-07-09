import { ComponentStory } from '@storybook/react';
import IconButton from '../IconButton';
import Header from './Header';

import ArrowLeftIcon from '../../assets/icon/arrow_left.svg';
import HamburgerIcon from '../../assets/icon/hamburger.svg';

export default {
  title: 'Components/Header',
  component: Header,
  args: {
    title: "게시물",
    left: <IconButton src={ArrowLeftIcon} alt="back"/>,
    right: <IconButton src={HamburgerIcon} alt="menu"/>
  },
};

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const 뒤로가기_글작성하기 = Template.bind({});
